<script>
  import Nav from "$lib/client/components/Nav.svelte";
  import Footer from "$lib/client/components/Footer.svelte";
  import {browser} from '$app/environment';
  import "aos/dist/aos.css";
  import AOS from "aos";
  if (browser) {
    AOS.init({
      offset: 30
    });
  }
</script>

<svelte:head>
  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=Numans&family=Poppins:ital,wght@0,300;0,400;0,700;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="flex flex-col justify-between min-h-screen bg-s-black">
  <Nav />
  <section class="content flex-grow grid">
    <slot />
  </section>
  <Footer />
</main>
