<script>
  import { onMount, onDestroy } from 'svelte';
  import { supabase } from '$lib/supabase';
  import { page } from '$app/state';
  
  let postId = $derived.by(() => {
    if (page.params.slug) {
        return page.params.slug
    } 
    if (page.url.pathname === '/blog') {
        return 'home'
    }

    return page.url.pathname.split('/').pop() || 'default';
  })


  let comments = $state([]);
  let cargando = $state(true);
  let error = $state(null);
  
  let nombre = $state('');
  let comentario = $state('');
  let enviando = $state(false);
  
  let subscription = null;
  
  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  async function cargarComentarios() {
    if (!postId) {
      cargando = false;
      return;
    }
    
    try {
      cargando = true;
      error = null;
      
      const { data, error: fetchError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: false });
      
      if (fetchError) throw fetchError;
      
      comments = data || [];
    } catch (err) {
      error = 'Error al cargar comentarios';
      console.error('Error cargando comentarios:', err);
    } finally {
      cargando = false;
    }
  }
   
  async function enviarComentario(event) {
    event.preventDefault();
    
    if (!nombre.trim() || !comentario.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    if (!postId) {
      alert('Error: No se pudo identificar el post');
      return;
    }
    
    try {
      enviando = true;
      error = null;
      
      const { data, error: insertError } = await supabase
        .from('comments')
        .insert([
          {
            post_id: postId,
            nombre: nombre.trim(),
            comentario: comentario.trim()
          }
        ])
        .select();
      
      if (insertError) throw insertError;
      
      nombre = '';
      comentario = '';
      
      
    } catch (err) {
      error = 'Error al enviar comentario';
      console.error('Error enviando comentario:', err);
      alert('Error al enviar comentario. Inténtalo de nuevo.');
    } finally {
      enviando = false;
    }
  }
  
  function configurarSuscripcion() {
    if (!postId) return;
    
    subscription = supabase
      .channel(`comments-${postId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`
        },
        (payload) => {
          console.log('Nuevo comentario recibido:', payload.new);
          // Agregar el nuevo comentario al inicio del array
          comments = [payload.new, ...comments];
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`
        },
        (payload) => {
          console.log('Comentario eliminado:', payload.old);
          // Remover el comentario eliminado
          comments = comments.filter(c => c.id !== payload.old.id);
        }
      )
      .subscribe((status) => {
        console.log('Estado de suscripción:', status);
      });
  }
  
  // Función para limpiar suscripción
  function limpiarSuscripcion() {
    if (subscription) {
      supabase.removeChannel(subscription);
      subscription = null;
    }
  }
  

  // Reactivamente recargar si cambia el postId
  $effect(() => {
    if (postId) {
      limpiarSuscripcion();
      cargarComentarios();
      configurarSuscripcion();
    }
  });
</script>

<!-- Sección de Comentarios -->
<section class="bg-primary-950 font-secondary text-sm px-8 py-4">
    <div class="max-w-4xl mx-auto">
        <div class="shadow-md rounded-lg mb-2">
            <h2 class="text-xl font-bold text-secondary-100 mb-4">
              {#if cargando}
                Cargando comentarios...
              {:else}
                {comments.length > 0 ? `Comentarios (${comments.length})` : 'Sección de comentarios'}
              {/if}
            </h2>

            {#if error}
              <div class="bg-red-900 text-red-200 p-4 rounded-lg mb-4">
                {error}
                <button onclick={cargarComentarios} class="ml-2 underline hover:no-underline">Reintentar</button>
              </div>
            {/if}

            {#if !cargando && comments.length === 0}
              <div class="my-7">
                  <p class="text-primary-50 text-lg">Aún no hay comentarios</p>
                  <p class="text-primary-600 mt-2">Pero tú puedes abrir la conversación :)</p>
              </div>
            {/if}

            {#if cargando}
              <div class="flex justify-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              </div>
            {/if}

            {#each comments as comentario (comentario.id)}
              <div class="p-6 rounded-lg">
                  <div class="flex items-center mb-3 justify-between">
                      <h4 class="font-semibold text-primary-500">{comentario.nombre}</h4>
                      <p class="text-xs text-primary-600">{formatearFecha(comentario.created_at)}</p>
                  </div>
                  <p class="text-gray-200">{comentario.comentario}</p>
                  <hr class="my-4 border-primary-200" />
              </div>
            {/each}
        </div>

        <div class="bg-primary-950 p-6 mx-auto rounded-lg border border-primary-800">
            <h3 class="text-lg font-semibold text-primary-100 mb-4">
              {comments.length > 0 ? '¿Tú qué piensas?' : 'Nos gustaría mucho leerte'}
            </h3>
            
            <form onsubmit={enviarComentario}>
                <div class="mb-4">
                    <input id="nombre" type="text" bind:value={nombre} placeholder="Tu nombre" class="w-full px-3 py-2 border -primary-700 rounded-md text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 :ring-primary-500 :border-transparent" disabled={enviando} required/>
                </div>
                
                <div class="mb-4">
                    <textarea id="comentario" bind:value={comentario} placeholder="Comparte tu opinión, idea o pregunta" rows="4" class="w-full px-3 py-2 border border-primary-700 rounded-md text-primary-100 placeholder-primary-400 :outline-none :ring-2 focus:ring-primary-500 focus:border-transparent resize-none" disabled={enviando} required></textarea>
                </div>
                
                <button type="submit" disabled={enviando || !nombre.trim() || !comentario.trim()} class="border border-primary-700 hover:text-primary-50 hover:bg-primary-400 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-primary-200 font-medium py-2 px-6 rounded-md transition-colors duration-200">
                  {enviando ? 'Enviando...' : 'Comentar'}
                </button>
            </form>
        </div>
    </div>
</section>