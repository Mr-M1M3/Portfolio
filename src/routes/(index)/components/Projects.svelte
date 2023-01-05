<script>
  export let data = [];
  import Icon from "@iconify/svelte";
  import { browser } from "$app/environment";
</script>

<section class="projects px-4 md:px-8 lg:px-16 py-2 my-3">
  <h1
    class="text-4xl lg:text-5xl text-s-primary my-8 text-center font-secondary"
    id="projects"
  >
    Projects I've Done
  </h1>
  <div
    class="projects-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8"
  >
    {#if browser}
      {#each data as project}
        <div
          data-aos="zoom-in"
          class="bg-s-white-transparent px-3 py-4 rounded-md h-56 overflow-hidden flex flex-col justify-start cursor-pointer"
          on:click={() => {
            window.open(project.url, "_blank");
          }}
        >
          <p
            class="flex justify-start items-center text-s-primary font-bold my-2 w-full font-secondary"
          >
            <span class="text-3xl"><Icon icon="bi:code" /></span>
            <span class="text-xl mx-3">{project.name}</span>
          </p>
          <p
            class="w-full overflow-hidden leading-7 repo-desc gradient text-transparent"
          >
            {project.description}
          </p>
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
  .gradient {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    background-clip: text;
  }
</style>
