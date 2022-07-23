<script>
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=Numans&family=Poppins:ital,wght@0,300;0,400;0,700;1,700&display=swap" rel="stylesheet"> 
</svelte:head>

<main class="flex flex-col justify-between min-h-screen bg-s-black">
    <Nav />
    <section class="content flex-grow grid">
        <slot></slot>
    </section>
    <Footer/>
</main>
