<script>
  // import components
  import Nav from "$lib/client/components/Nav.svelte";

  // import page data
  import {page} from "$app/stores";
  const {status, error} = $page;
  
  // import modules
  import {goto} from "$app/navigation";
</script>

<main class="min-h-screen bg-s-black">
  <Nav/>
  <div class="wrapper flex flex-col justify-between h-full max-w-md mx-auto">
    <section class="messages">
      <h1 class="text-8xl text-white font-bold font-s-cursive text-center">
        Oops!  
      </h1>
      <p class="text-xl text-white font-bold font-s-cursive text-center my-8 leading-loose"><span class="text-3xl">{status ?? ""}</span> {error.message ?? "Something went wrong"}</p>
    </section>
    <section class="images flex-grow flex justify-center items-center">
      {#if (status >= 400) && (status < 500)}
      <img src="/images/404.svg" alt="Error" class="object-contain">
      {:else}
      <img src="/images/error.svg" alt="">
      {/if}
    </section>
    <button class="bg-s-primary my-4 mx-4 h-14 rounded-md text-center font-bold text-xl" on:click="{() => {goto("/")}}">Go Home</button>
  </div>
</main>