<style>
  :global(html), :global(body) {
    background: #dbdbdbb3;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .poster-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 16px #0001;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
    font-family: 'Inter', sans-serif;
  }
  .poster-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 6px 24px #0002;
  }
  .poster-image {
    width: 100%;
    height: 320px;
    object-fit: cover;
    background: #e0e0e0;
  }
  .poster-content {
    padding: 1.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .poster-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .poster-description {
    color: #444;
    font-size: 1rem;
  }
</style>

<script lang="ts">
  import Top from '../top.svelte';
  import { onMount } from 'svelte';
  type Poster = {
    name: string;
    fileName: string;
    description: string;
  };
  let posters: Poster[] = [];
  let loading = true;
  let error = '';

  onMount(async () => {
    try {
      const res = await fetch('/posters.json');
      if (!res.ok) throw new Error('Failed to load posters');
      posters = await res.json();
    } catch (e: any) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<div class="container">
  <Top />
  {#if loading}
    <p>Loading posters...</p>
  {:else if error}
    <p style="color: red">{error}</p>
  {:else}
    <div class="grid">
      {#each posters as poster}
        <div class="poster-card">
          <img class="poster-image" src={`/posters/${poster.fileName}`} alt={poster.name} />
          <div class="poster-content">
            <div class="poster-title">{poster.name}</div>
            <div class="poster-description">{poster.description}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
  