<script>
  import Post from "./components/Post.svelte";
  import { goto } from "$app/navigation";
  import Pagination from "./components/Pagination.svelte";
  import { balancer } from "svelte-action-balancer";

  export let data = {};
  $: posts = data.posts;
  $:({items, page, totalPages} = posts);

  async function paginate({ detail: { page } }) {
    await goto(`/blog?page=${page}`);
  }
</script>

<h1 class="text-4xl leading-loose text-white mt-1 mb-8 mx-8" use:balancer>
  Never Miss:
</h1>
<section class="posts">
  {#each items as item (item.id)}
    <Post {item} />
  {/each}
</section>
<Pagination
  on:paginate={paginate}
  current_page={page}
  page_count={totalPages}
/>

<style>
  .posts {
    @apply grid gap-4 px-4 my-2 grid-cols-1;
    grid-template-rows: 11rem;
    grid-auto-rows: 11rem;
    min-width: 200px;
    max-width: 980px;
    margin: auto;
  }
</style>
