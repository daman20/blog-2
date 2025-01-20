<script lang="ts">
    import ContentSection from '$lib/components/organisms/ContentSection.svelte';
    import Image from '$lib/components/atoms/Image.svelte';
    
    // Update path to correctly point to static directory
    const posterImages = Object.entries(import.meta.glob('/images/posters/*', {
        eager: true,
        as: 'url'
    }));
</script>

<ContentSection
    id="photo-gallery"
    title="Photo Gallery" 
    description="A collection of my posters"
    align="left"
>
    <div class="gallery-grid">
        {#each posterImages as [path, url]}
            <div class="image-container">
                <Image 
                    src={url.replace('/static', '')}
                    alt={path.split('/').pop()?.split('.')[0] || 'Poster image'}
                />
            </div>
        {/each}
    </div>
</ContentSection>

<style lang="scss">
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .image-container {
        aspect-ratio: 1;
        width: 100%;
    }

    :global(.image-container img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: var(--image-shadow);
    }
</style>