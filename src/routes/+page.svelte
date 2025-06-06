<script>
  import { track } from '@vercel/analytics';

  let email = ''; 
  function subscribe() {
    if (email) {
      console.log(`Subscribing: ${email}`);
      // TODO: Add real integration with email marketing service
      email = '';
    }
  }


</script>

<!-- Sección principal de Scythe -->
<section class="min-h-screen bg-primary-950 text-primary-100 flex flex-col items-center justify-center px-6 py-16">
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
<section class="bg-red-950 text-white px-6 py-20 flex flex-col items-center text-center">
  <div class="max-w-xl w-full">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
      ¿Quieres saber en qué termina todo esto?
    </h2>
    <p class="text-lg text-red-200 mb-10">
      Recibe novedades semanales del proyecto directamente en tu bandeja de entrada
    </p>

    <div class="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        bind:value={email}
        placeholder="Tu correo electrónico"
        class="w-full px-4 py-3 rounded-lg bg-red-50 text-primary-950 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onclick={subscribe}
        class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition w-full sm:w-auto"
      >
        Suscribirme
      </button>
    </div>
  </div>
</section>
