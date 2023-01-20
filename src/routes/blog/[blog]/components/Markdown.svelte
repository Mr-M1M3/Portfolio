<script>
  // import md parser
  import { parse } from "$lib/client/scripts/md-parser.js";
  // import syntax highlighter css library
  import "highlight.js/styles/github-dark.css";
  // import css for md
  import "github-markdown-css";

  export let md = "";
</script>

{#await parse(md) then html}
  <div class="markdown-body w-full">
    {@html html}
  </div>
{/await}

<style>
  .markdown-body {
    --color-canvas-default: theme(colors[s-black]);
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 15px;
  }

  /* @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  } */
</style>
