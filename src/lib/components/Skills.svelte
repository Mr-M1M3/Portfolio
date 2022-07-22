<script>
  import { browser } from "$app/env";
  import Icon from "@iconify/svelte";
  export let data = [];
</script>
<section class="skills p-y-4 px-5 py-3 grid grid-cols-1 md:grid-cols-2">
  <div class="coding flex justify-center items-center">
    <img src="/images/coding.svg" alt="" class="max-w-md"/>
  </div>
  <div class="heading-with-skills flex flex-col">
    <h1 class="text-4xl lg:text-5xl text-s-primary text-center font-primary my-4" id="skills">Things I work with</h1>
    <div class="skills-container flex-grow flex content-center flex-wrap justify-center items-center ">
      {#if browser}
        {#each data as datum}
          <div class="skill flex justify-center items-center flex-col mx-2 my-3 md:p-3">
            <p class="text-6xl">
              <Icon icon={datum.icon} />
            </p>
            <p class="text-md text-white font-bold my-1">{datum.name}</p>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>