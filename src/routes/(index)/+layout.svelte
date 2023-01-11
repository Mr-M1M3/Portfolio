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

<main class="flex flex-col justify-between min-h-screen bg-s-black">
  <Nav />
  <section class="content flex-grow grid">
    <slot />
  </section>
  <Footer />
</main>
