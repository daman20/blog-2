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
<h3> Storytime</h3>

<p>A few Thanksgivings ago, my family was going through photos in my grandparents house. At that time, there were 2 large tubs of photos. After going through a few of them, we found many that were disintegrating, and I decided to archive all of these photos for the family.</p>

<h3> My part </h3>
<p> In that process, I've acquired a FastFoto scanner, and worked with my mom to tag each photo with the people in it and approximate time.</p>
<p> Each photo was uploaded to a PhotoPrism instance on my servers. Also, since I have a library of tagged people, it uses facial recognition to help tag future photos. </p>
<p> The photos are accessible to members of my family and I am working on sourcing more photos to scan, with the end goal of having the majority of my families photos digitized.</p>
<p> As it stands, I have just over 1000 photos in the repository.</p>
<p> Some of my favorite photos I've found are below</p>
<img src="/photos/ARCHIVE-Space Garden.jpg" alt="Air and Space Museum Rocket Garden" style="width: 100%; max-width: 600px; border-radius: 10px; margin-bottom: 20px;">
</body>
