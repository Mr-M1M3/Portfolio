<script>
  export let data = [];
  import Icon from "@iconify/svelte";
  import { browser } from "$app/env";
</script>

<section class="projects px-3 py-2 my-3">
  <h1 class="text-3xl text-s-primary my-4 text-center">Projects I've Done So Far</h1>
  <div class="projects-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#if browser}
      {#each data as project}
        <div
          class="bg-s-white-transparent px-3 py-4 rounded-md h-40 overflow-hidden flex flex-col justify-start"
        >
          <p
            class="flex justify-start items-center text-s-primary font-bold my-2 w-full"
          >
            <span class="text-3xl"><Icon icon="bi:code" /></span>
            <span class="text-xl mx-3">{project.name}</span>
          </p>
          <p class="w-full overflow-hidden leading-7 repo-desc gradient text-transparent">
            {project.description}
          </p>
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
  .gradient{
    background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%);
background-clip: text;
  }
</style>
