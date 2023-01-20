<script>
    import { createEventDispatcher } from "svelte";
    const announce = createEventDispatcher();

    export let page_count = 90;
    export let arr = [];
    export let current_page= 1;
    export let start_from = current_page> 4 ? (current_page- 3) : 1;
    if(current_page > page_count){
        current_page = page_count - 3;
    }
    if(page_count >= 7){
        for(let i = 0; i < 7; i++){
            if(start_from > page_count) {
                start_from = 1;
            };
            arr.push(start_from);
            start_from += 1;
        }
    }else{
        for(let i = 0; i < page_count; i++){
            arr.push(start_from);
            start_from += 1;
        }
    }
    function clicked(page){
        announce('paginate', {
            page
        });
    }
</script>
<section class="pagination px-8 my-6 flex w-full flex-wrap justify-center items-center">
{#each arr as page, n}
    <button on:click={() => {clicked(page)}} class:active="{current_page === page}">{page}</button>
{/each}
</section>
<style>
    button{
        @apply h-8 w-8 flex justify-center items-center border-2 border-s-primary text-white mx-2 my-3 rounded-full hover:bg-s-white-transparent;
    }
    button.active{
        @apply bg-s-primary text-s-black;
    }
</style>