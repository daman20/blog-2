<style>
  :global(html), :global(body) {
    background: #dbdbdbb3;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>

<script>
  import Top from './top.svelte';
  import Posts from './posts.svelte';
</script>

<div class="container">
  <Top />
  <Posts />
</div>
