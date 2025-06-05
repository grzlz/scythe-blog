<script>
  import { onMount } from 'svelte';
  
  // Props
  let { postId = null } = $props();
  
  // Array hardcodeado de comentarios para simular
  let comments = $state([
  ]);
  
  // Estado del formulario
  let nombre = $state('');
  let comentario = $state('');
  let enviando = $state(false);
  
  // Función para formatear fecha
  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Función para manejar el envío del comentario
  async function enviarComentario() {
    if (!nombre.trim() || !comentario.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    enviando = true;
    
    // Simular envío (aquí después conectarás con Supabase)
    setTimeout(() => {
      const nuevoComentario = {
        id: comments.length + 1,
        nombre: nombre.trim(),
        comentario: comentario.trim(),
        fecha: new Date().toISOString()
      };
      
      comments = [nuevoComentario, ...comments];
      nombre = '';
      comentario = '';
      enviando = false;
    }, 1000);
  }
  
  // Función para cargar comentarios (preparada para Supabase)
  async function cargarComentarios() {
    if (!postId) return;
    
    // Aquí después implementarás la carga desde Supabase
    // basándose en el postId
    console.log(`Cargando comentarios para post: ${postId}`);
  }
  
  onMount(() => {
    cargarComentarios();
  });
</script>

<!-- Sección de Comentarios -->
<section class="bg-primary-950 font-secondary text-sm px-8 py-4">
    <div class="max-w-4xl mx-auto ">
        <div class="shadow-md rounded-lg mb-2">
            <h2 class="text-xl font-bold text-secondary-100 mb-4">{comments.length > 0 ? `Comentarios (${comments.length})` : 'Sección de comentarios' }</h2>

            {#if comments.length === 0}
            <div class="my-7">
                <p class="text-primary-50 text-lg">Aún no hay comentarios</p>
                <p class="text-primary-600 mt-2">Pero tú puedes abrir la conversación :)</p>
            </div>
            {/if}

            {#each comments as comentario (comentario.id)}
            <div class="p-6 rounded-lg ">
                <div class="flex items-center mb-3 justify-between">
                    <h4 class="font-semibold text-primary-500">{comentario.nombre}</h4>
                    <p class="text-xs text-primary-600">{formatearFecha(comentario.fecha)}</p>
                </div>
                <p class="text-gray-200">{comentario.comentario}</p>
                <hr class="my-4 border-primary-200" />
            </div>
            {/each}

        </div>

        <div class="bg-primary-950 p-6 mx-auto rounded-lg border border-primary-800">
            <h3 class="text-lg font-semibold text-primary-100 mb-4">{comments.length > 0 ? '¿Tú qué piensas?' : 'Nos gustaría mucho leerte'}</h3>
            <form onsubmit={enviarComentario}>
                <div class="mb-4">
                    <input id="nombre" type="text" bind:value={nombre} placeholder="Tu nombre" class="w-full px-3 py-2 border border-primary-700 rounded-md text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" disabled={enviando}/>
                </div>
                <div class="mb-4">
                    <textarea id="comentario" bind:value={comentario} placeholder="Comparte tu opinión, idea o pregunta" rows="4" class="w-full px-3 py-2 border border-primary-700 rounded-md text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none" disabled={enviando} ></textarea>
                </div>
                <button type="submit" disabled={enviando || !nombre.trim() || !comentario.trim()} class="border border-primary-700 hover:text-primary-50 hover:bg-primary-400 hover:cursor-pointer disabled:cursor-not-allowed text-primary-200 font-medium py-2 px-6 rounded-md transition-colors duration-200">{enviando ? 'Enviando...' : 'Comentar'}</button>
            </form>
        </div>
    </div>
</section>
