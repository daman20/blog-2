<script lang="ts">
  import Top from '../top.svelte';
  import Footer from '../footer.svelte';
  import { onMount } from 'svelte';

  type Photo = {
    name: string;
    fileName: string;
    description: string;
    src: string;
  };

  let images: Photo[] = [];
  let selected: Photo | null = null;

  onMount(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') selected = null;
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  onMount(async () => {
    const res = await fetch('/photos/info.json');
    const photos = await res.json();
    images = photos.map((photo: Omit<Photo, 'src'>) => ({
      ...photo,
      src: `/photos/${photo.fileName}`
    }));
  });
</script>

<style>
:global(body) {
  font-family: 'Inter', system-ui, sans-serif;
  color: #181818;
  margin: 0;
}
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3rem 1.5rem;
}
.photo-list {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}
.photo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo-img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 800px;
  border-radius: 1.1rem;
  background: #f3f3f3;
  box-shadow: none;
  margin-bottom: 1.2rem;
}
.photo-info {
  text-align: center;
  max-width: 700px;
}
.photo-info h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  font-weight: 600;
  font-size: 5rem;
}
.photo-info p {
  margin: 0;
  font-size: 1.01rem;
  color: #666;
  line-height: 1.5;
}
</style>
<Top />
<div class="photo-blog-summary" style="max-width:900px;margin:2rem auto 1.5rem auto;padding:1.2rem 1.5rem 1.2rem 1.5rem;background:#f8f8f8;border-radius:1rem;text-align:center;">
  <h2 style="margin:0 0 0.5rem 0;font-size:1.5rem;font-weight:600;">About My Photography</h2>
  <p style="margin:0 0 0.5rem 0;font-size:1.05rem;line-height:1.6;">
    I have always been passionate about photography, starting with my iPhone and now shooting with a Nikon Z8 and my dad's vintage Nikon FE. My journey, favorite shots, and more about my gear are shared in my <a href="/projects/photography" style="color:#0070f3;text-decoration:underline;">photography bag</a>.
  </p>
</div>
<div class="page-container">
  <div class="photo-list">
    {#each images as image}
      <div class="photo-item">
        <img class="photo-img" src={image.src} alt={image.name} loading="lazy" />
        <div class="photo-info">
          <h3>{image.name}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
<Footer />
