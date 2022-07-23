<script>
  import { isBurgerActive } from "$lib/scripts/stores.js";
  import { slide } from "svelte/transition";
</script>

<nav class="bg-s-black text-s-primary font-bold py-6 px-4 md:py-8 md:px-6 flex justify-between">
  <section class="logo">
    <h1 class="font-cursive text-2xl">
        <a href="/">
      <span>&lt;</span>
      <span>Mr. M1M3</span>
      <span class="">&#47;&gt;</span></a>
    </h1>
  </section>
  <section class="navigator">
    <span
      class="md:hidden burger relative flex justify-center items-center h-7 w-7 cursor-pointer"
      class:active={$isBurgerActive}
      on:click={() => {
        $isBurgerActive = !$isBurgerActive;
      }}
    />
    <ul class="hidden md:flex h-full">
        <li class="rounded-md nav-link h-full relative mx-2 w-24 flex justify-center items-center">
         <a class="text-center h-full w-full" href="#skills">Skills</a
            >
          </li>
          <li class="rounded-md nav-link h-full relative mx-2 w-24 flex justify-center items-center">
         <a class="text-center h-full w-full" href="#projects"
              >Projects</a
            >
          </li>
          <li class="rounded-md nav-link h-full relative mx-2 w-24 flex justify-center items-center">
         <a class="text-center h-full w-full" href="#contact"
              >Contact</a
            >
          </li>
    </ul>
  </section>
</nav>
{#key $isBurgerActive}
  {#if $isBurgerActive}
    <nav class="extra bg-s-black text-white" transition:slide>
      <ul class="py-2 font-secondary text-lg px-3">
        <li class="hover:bg-s-primary/80 rounded-md my-2">
          <a class="w-full p-3 inline-block" href="#skills">Skills</a
          >
        </li>
        <li class="hover:bg-s-primary/80 rounded-md my-2">
          <a class="w-full p-3 inline-block" href="#projects"
            >Projects</a
          >
        </li>
        <li class="hover:bg-s-primary/80 rounded-md my-2">
          <a class="w-full p-3 inline-block" href="#contact"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  {/if}
{/key}
<style>
  .burger::before {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    transform: translateY(-10px);
    display: inline-block;
    background-color: #f6ae2d;
    box-shadow: 0 10px 0 #f6ae2d;
    transition: 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .burger::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    transform: translateY(10px);
    display: inline-block;
    background-color: #f6ae2d;
    transition: 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .burger.active::before {
    box-shadow: none;
    transform: translateY(0) rotate(45deg);
  }
  .burger.active::after {
    transform: translateY(0) rotate(-45deg);
  }
  .nav-link::after{
    content: "";
    height: 2px;
    width: 0;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0.125rem);
    background: #f6ae2d;
    transition: 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .nav-link:hover::after{
    width: 100%;
  }
</style>
