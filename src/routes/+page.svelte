<script>
  import { supabase } from '$lib/supabase';
  import { track } from '@vercel/analytics';

  let email = $state('');
  let loading = $state(false);
  let feedback = $state('');
  
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

<!-- Sección principal de Scythe -->
 <div class="bg-gradient-to-b from-primary-950 to-primary-800">
  <section class="min-h-screen  text-primary-100 flex flex-col items-center justify-center px-6 py-16">
  <div class="max-w-4xl text-left mb-auto">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-8">¿Qué es <span class="text-primary-500">Scythe</span>?</h1>
    <p class="text-lg md:text-xl text-primary-200 my-8 mb-8">Es una forma de desarrollar software que no depende del capital.</p>
    <p class="text-lg md:text-xl text-primary-200 my-8 mb-8">Entra al blog para saber más.</p>
    <div class="mt-4">
      <a href="/blog?utm_source=homepage&utm_medium=cta&utm_campaign=hero_section&utm_content=explore_button" class="inline-block px-6 py-3 rounded-lg border border-primary-400 text-primary-300 hover:text-white hover:border-white hover:bg-primary-800 transition font-semibold">Explorar →</a>
    </div>
  </div>
</section>

<!-- Sección separada de suscripción -->
<section class="bg-seconday-950 text-white px-6 py-20 flex flex-col items-center text-center">
  <div class="max-w-xl w-full">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
      ¿Quieres saber en qué termina todo esto?
    </h2>
    <p class="text-lg text-primary-200 mb-10">
      Recibe novedades semanales del proyecto directamente en tu bandeja de entrada
    </p>

    <div class="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        bind:value={email}
        placeholder="Tu correo electrónico"
        class="w-full px-4 py-3 rounded-lg bg-red-50 text-primary-950 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button onclick={() => subscribe('homepage')} class="px-6 py-3 rounded-lg bg-primary-600 hover:bg-red-700 text-white font-bold transition w-full sm:w-auto whitespace-nowrap">
      {#if feedback}
      {feedback}
      {:else if loading}
      Suscribiendo…
      {:else}
      Suscribirme
      {/if}
      </button>
    </div>
  </div>
</section>
</div>
