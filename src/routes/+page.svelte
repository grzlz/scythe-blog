<script>
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
<section class="min-h-full bg-primary-950 text-primary-100 flex flex-col items-center justify-center px-6 py-16">
  <div class="max-w-4xl text-left">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-6 text-primary-50">¿Okey, pero qué es Scythe?</h1>
    <p class="mt-8 text-lg md:text-xl text-primary-300 mb-4">Trabajo compartido, valor distribuido.</p>
    <p class="text-lg md:text-xl text-primary-300 mb-8">
      Scythe es una nueva forma de construir software. Una forma de desarrollar sin pedir permiso al capital.
    </p>
    <div class="mt-4">
      <a
        href="/blog"
        class="inline-block px-6 py-3 rounded-lg border border-primary-400 text-primary-300 hover:text-white hover:border-white hover:bg-primary-800 transition font-semibold"
      >
        Explorar el blog →
      </a>
    </div>
  </div>
</section>

<!-- Sección separada de suscripción -->
<section class="bg-red-950 text-white px-6 py-16 flex flex-col items-center justify-center text-center">
  <div class="max-w-xl w-full">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Suscríbete al newsletter</h2>
    <p class="text-lg text-red-200 mb-8">Recibe ideas, análisis y avances del proyecto directamente en tu bandeja de entrada.</p>
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        bind:value={email}
        placeholder="Tu correo electrónico"
        class="w-full px-4 py-3 rounded-lg text-primary-950 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onclick={subscribe}
        class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition"
      >
        Suscribirme
      </button>
    </div>
  </div>
</section>
