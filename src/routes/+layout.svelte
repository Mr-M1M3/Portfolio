<script>
  import "../app.postcss";
  import Icon from "@iconify/svelte";

  function scroll_to_top(){
    location.hash = "";
    scrollTo(0, 0);
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

<div class="h-12 w-12 text-2xl fixed bottom-0 right-0 m-6 bg-s-black text-white border-2 border-s-primary z-50 flex justify-center items-center rounded-full cursor-pointer" on:click={scroll_to_top}>
  <Icon icon="mdi:arrow-up"/>
</div>
<slot />

