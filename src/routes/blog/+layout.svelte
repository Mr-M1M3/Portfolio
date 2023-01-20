<script>
    import Nav from "$lib/client/components/Nav.svelte";
    import Footer from "$lib/client/components/Footer.svelte";
  </script>
  
  <main class="flex flex-col justify-between min-h-screen bg-s-black">
    <Nav />
    <section class="content flex-grow mb-8">
      <slot />
    </section>
    <Footer />
  </main>
  