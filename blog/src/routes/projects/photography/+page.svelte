<script lang="ts">
    import Top from '../../top.svelte';
    import Footer from '../../footer.svelte';
</script>
<style>
    body {
        font-family: 'Inter', sans-serif;
        margin: 10px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        max-width: 800px;
        margin: 0 auto;
        color: #000000;
        text-align: center;

    }
    p {
        font-family: 'Inter', sans-serif;
        font-weight: 270;
        letter-spacing: 1px;
        line-height: 1.5;
        text-align: center;
        font-size: 16px;
        color: #000000;
    }
    h3{
        font-size: x-large;
        top: 100px;
    }
</style>

<Top />

<body>
    <h3> Before </h3>
    <p> I've always been into photography. For a while, that manifested as shooting on my iPhone. As part of that, I've taken a variety of shots, my favorite being the one below, which got reposted by NASA Artemis</p>
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fantastic details on this one! 🌕📸</p>&mdash; NASA Artemis (@NASAArtemis) <a href="https://twitter.com/NASAArtemis/status/1587173673429045248?ref_src=twsrc%5Etfw">October 31, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
    <h3> My Bag </h3>
    <p> More recently, I've stumbled upon my dad's old camera gear from 1982. His kit includes a Nikon FE, a 55mm Macro lens, and a 35mm Macro lens</p>
    <img src="/photos/Nikon FE.jpeg" alt="Nikon FE Camera" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <p> While I'm still working on using the FE body, I also have a Nikon Z8, which is what I shoot most photos on these days. </p>
    <p> Most of these photos are posted <a href="/photo-gallery">here </a></p>
    <p> I also have an <a href="https://www.instagram.com/aman.withacam?igsh=dmRvOXF5dmRhNHo4&utm_source=qr" target="_blank" rel="noopener">Instagram</a> where I post some of my favorite shots. </p>

</body> 