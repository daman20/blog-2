<script lang="ts">
    import Top from '../top.svelte';
    import Footer from '../footer.svelte';
    import { onMount } from 'svelte';
</script>
<Top />

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
    ul{
        list-style-type:none;
        padding:0px;
        margin:0px;
    }
    li{
        padding-bottom:14px;
        font-family: 'Inter', sans-serif;
        font-weight: 270;
        letter-spacing: 1px;
        line-height: 1.5;
        text-align: center;
        font-size: 16px;
        color: #000000;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>
<body>
<ul>
    <li><a href="/projects/photography">Photography</a></li>
</ul>
</body>
<Footer />