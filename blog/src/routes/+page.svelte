<style>
  :global(html), :global(body) {
    background: #dbdbdbb3;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .container {
    flex: 1 0 auto;
  }
</style>

<script>
  import Top from './top.svelte';
  import Posts from './posts.svelte';
  import Footer from './footer.svelte';
</script>

<div class="page-wrapper">
  <div class="container">
    <Top />
    <Posts />
  </div>
  <Footer />
</div>
