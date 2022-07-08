<script>
  import Typewriter from "$lib/components/Typewriter.svelte";
</script>

<div class="grid content-center justify-center grid-cols-1 md:grid-cols-2 md:grid-rows-1">
  <div class="flex justify-center items-center flex-col px-2 h-full">
    <h1 class="text-s-primary text-8xl font-primary">Hello!</h1>
    <p class="text-white text-2xl my-4">
      I'm <span class="font-cursive">Mr-M1M3</span>
    </p>
    <p class="text-white">
      a <span class="text-s-primary font-bold text-2xl">
        <Typewriter type={["Web Developer", "Human Being"]} delay="300"/>
    </span>
    </p>
    <p class="text-s-primary font-primary text-5xl text-center hidden lg:block my-4">
      I Love to make the web look <span class="text-white block my-4 text-7xl">Cooler!!!</span>
    </p>
  </div>
  <div class="image-container flex justify-end">
    <img src="/images/hero.svg" alt="" class="mx-w-1/2" />
  </div>
</div>
