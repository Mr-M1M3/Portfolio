<script>
  import Markdown from "./components/Markdown.svelte";
  import {balancer} from "svelte-action-balancer";
  export let data;
  const {md, title} = data;
</script>
<section class="blog">
  <article class="heading flex flex-col justify-between">
    <h1 class="text-3xl text-s-primary font-extrabold w-full my-0 font-s-secondary text-left px-3" use:balancer>{title}</h1>
    <!-- TODO: add author -->
  </article>
  <article class="my-8">
    <Markdown md={md}/>
  </article>
</section>

<style>
  .heading{
    min-width: 200px;
    max-width: 980px;
    margin: auto;
  }
</style>