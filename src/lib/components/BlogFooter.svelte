<script>
    import { supabase } from '$lib/supabase';
    import { track } from '@vercel/analytics';
    import { fade } from 'svelte/transition';
    
    let email = $state('');
    let loading = $state(false);
    let feedback = $state('');


	let hovered = $state(false)

	const year = new Date().getFullYear();

      
  /**
   * Inserta un email en Supabase con la fuente dada.
   * @param {string} source - etiqueta de dónde vino la suscripción
   */
  async function subscribe(source) {
    loading  = true;

    // Opcional: trackear en Vercel Analytics
    track('newsletter_subscribe', { email, source });

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('emails')
      .insert([
        {
          email:  email.toLowerCase().trim(),
          source
        }
      ]);

    if (error) {
      console.error('Error inserting email:', error);
      feedback = 'Ocurrió un error. Intenta de nuevo más tarde.';
    } else {
      feedback = '¡Gracias por suscribirte!';
      email    = '';  // limpia el campo
    }

    loading = false;
  }

</script>

<footer class="bg-primary-50 font-secondary">
    <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="prose text-primary-950">
            <h2 class="text-xl font-semibold mb-2 text-primary-900">¿Quiénes somos?</h2>
            <p class="text-sm">Somos pensadores, diseñadores y desarrolladores. <br />Estamos construyendo <span class="font-bold text-red-500 font-troll">Scythe</span>, un protocolo que mejora la coordinación entre la economía y el gobierno de un sistema.</p>
        </div>
        <div class="prose text-primary-950">
            <h2 class="text-xl font-semibold mb-2 text-primary-900">Trade offer:</h2>
            <p class="text-sm mb-6 text-primary-950">Si nos das tu correo, te enviaremos nuestro resumen mensual del mundo de la tecnología.</p>
            <form class="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Tu correo aquí" class="flex-1 px-4 py-2 rounded-md bg-primary-50 border border-primary-800  placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                <button type="submit" class="bg-secondary-700 hover:bg-secondary-600 hover:text-gray-200 text-primary-100 px-4 py-2 rounded-md text-sm transition">
                    {#if feedback}
                    {feedback}
                    {:else if loading}
                    Suscribiendo…
                    {:else}
                    Suscribirme
                    {/if}
                </button>
            </form>
        </div>
        
        <div>
            <h2 class="text-xl font-bold mb-4 text-primary-900">Redes sociales</h2>
            <div class="flex gap-5">
                <a href="https://twitter.com/ScytheManifesto" aria-label="Twitter" class="hover:text-primary-950 text-primary-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 19c11 0 14-9 14-14v-.5A10 10 0 0122 4a9.86 9.86 0 01-2.828.775A4.94 4.94 0 0021.5 2a9.77 9.77 0 01-3.127 1.195A4.92 4.92 0 0016.5 2a4.92 4.92 0 00-4.92 4.92c0 .386.043.762.127 1.122A13.978 13.978 0 013 3.6a4.92 4.92 0 001.523 6.574A4.9 4.9 0 012 9.4v.062a4.92 4.92 0 003.946 4.827 4.93 4.93 0 01-2.213.084 4.93 4.93 0 004.6 3.417A9.867 9.867 0 012 18.543 13.949 13.949 0 008 19z" />
                    </svg>
                </a>
                
                <a href="https://github.com/icarus-devs" aria-label="GitHub" class="hover:text-primary-950 text-primary-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.01c-3.338.725-4.033-1.608-4.033-1.608-.547-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.42-1.305.763-1.604-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.52.117-3.168 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.648.243 2.865.12 3.168.77.84 1.233 1.911 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.103.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" clip-rule="evenodd" />
                    </svg>
                </a>
                
                <a href="https://www.instagram.com/icarusdev.mx" aria-label="Instagram" class="hover:text-primary-950 text-primary-800  transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2C5.12665 2 3 4.12665 3 6.75V17.25C3 19.8734 5.12665 22 7.75 22H16.25C18.8734 22 21 19.8734 21 17.25V6.75C21 4.12665 18.8734 2 16.25 2H7.75ZM7.75 4H16.25C17.4926 4 18.5 5.00736 18.5 6.25V17.75C18.5 18.9926 17.4926 20 16.25 20H7.75C6.50736 20 5.5 18.9926 5.5 17.75V6.25C5.5 5.00736 6.50736 4 7.75 4ZM12 7C9.51472 7 7.5 9.01472 7.5 11.5C7.5 13.9853 9.51472 16 12 16C14.4853 16 16.5 13.9853 16.5 11.5C16.5 9.01472 14.4853 7 12 7ZM12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9ZM17.5 6.25C17.5 6.66421 17.1642 7 16.75 7C16.3358 7 16 6.66421 16 6.25C16 5.83579 16.3358 5.5 16.75 5.5C17.1642 5.5 17.5 5.83579 17.5 6.25Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    
    <div class="border-t border-primary-300 text-sm text-gray-400 px-6 py-6 relative h-10 overflow-hidden">
        <div class="max-w-6xl mx-auto text-center cursor-pointer relative h-full" onmouseenter={() => hovered = true} onmouseleave={() => hovered = false} role="button" tabindex="0">
            {#if hovered}
            <a href="http://icarus.mx" in:fade={{ duration: 200 }} out:fade={{ duration: 0 }} class="absolute inset-0 flex items-center justify-center">
                <img src="/logo.png" alt="icarus.mx logo" class="w-13 h-13" />
            </a>
            {:else}
            <span in:fade={{ duration: 200 }} out:fade={{ duration: 0 }} class="absolute inset-0 flex items-center justify-center">© {year} icarus.mx</span>
            {/if}
        </div>
    </div>

</footer>