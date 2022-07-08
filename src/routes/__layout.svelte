<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Merienda:wght@400;700&family=Mitr:wght@200;300;700&family=Numans&display=swap"
    rel="stylesheet"
  />
  <!-- Material Icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
</svelte:head>

<main class="flex flex-col justify-between min-h-screen bg-s-black">
    <Nav />
    <section class="content flex-grow grid">
        <slot></slot>
    </section>
    <Footer/>
</main>
