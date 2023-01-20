<script>
    import {balancer} from "svelte-action-balancer";
    import {goto} from "$app/navigation";
    import Tag from "$lib/client/components/Tag.svelte";
    export let item = {};
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article class="p-4 md:p-5 rounded-lg cursor-pointer hover:bg-s-white-transparent" on:click="{() => {goto(`/blog/${item.link}`)}}">
    <h1 class="text-2xl text-s-primary font-extrabold font-s-secondary md:text-3xl" use:balancer>{item.title}</h1>
    <div class="tags">
        {#each item.tags as tag (tag)}
            <Tag {tag}/>
        {/each}
    </div>
    <p class="text-lg md:text-xl leading-7 desc my-3 md:my-4">{item.description}</p>
</article>

<style>
    article{
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
    .desc{
        color:rgba(255, 255, 255, 0.85);
    }
</style>