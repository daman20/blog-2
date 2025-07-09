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
  .modal-backdrop {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .modal-content {
    background: #fff;
    border-radius: 1rem;
    max-width: 95vw;
    max-height: 85vh;
    box-shadow: 0 8px 32px #0004;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
  }
  .modal-image {
    max-width: 90vw;
    max-height: 80vh;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 16px #0002;
    cursor: zoom-in;
    transition: box-shadow 0.2s;
  }
  .modal-image.zoomed {
    max-width: none;
    max-height: none;
    width: auto;
    height: auto;
    cursor: zoom-out;
    box-shadow: 0 4px 32px #0004;
    display: block;
  }
  .modal-content.zoomed {
    overflow: auto;
    max-width: 98vw;
    max-height: 98vh;
    padding: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .modal-description {
    color: #444;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;
    z-index: 10;
  }
  .close-btn:hover {
    color: #222;
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
  let selectedPoster: Poster | null = null;
  let zoomed = false;

  function openModal(poster: Poster) {
    selectedPoster = poster;
    zoomed = false;
  }
  function closeModal() {
    selectedPoster = null;
    zoomed = false;
  }
  function toggleZoom() {
    zoomed = !zoomed;
  }

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
        <div class="poster-card" on:click={() => openModal(poster)} style="cursor:pointer">
          <img class="poster-image" src={`/posters/${poster.fileName}`} alt={poster.name} />
          <div class="poster-content">
            <div class="poster-title">{poster.name}</div>
            <div class="poster-description">{poster.description}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if selectedPoster}
    <div class="modal-backdrop" on:click={closeModal}>
      <div class="modal-content {zoomed ? 'zoomed' : ''}" on:click|stopPropagation>
        <button class="close-btn" on:click={closeModal} aria-label="Close">&times;</button>
        <img
          class="modal-image {zoomed ? 'zoomed' : ''}"
          src={`/posters/${selectedPoster.fileName}`}
          alt={selectedPoster.name}
          on:click={toggleZoom}
        />
      </div>
    </div>
  {/if}
</div>
  