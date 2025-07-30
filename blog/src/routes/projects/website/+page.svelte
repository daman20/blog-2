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
    <h3> Hosting </h3>
    <p> I decided I specifically wanted my website to NOT be hosted on the cloud, and to do as much as safely possible off of my servers. </p>
    <p> In that vain, I decided to self-host this on my Proxmox High Availability cluster. I have an Ubuntu VM that is set to automatically switch between servers based on availability</p>
    <p> I wrote my website in Svelte, which I commit to a git repo and push to my Github.</p>
    <p> Then, <a href="https://github.com/daman20/node-updater">this script I wrote </a> (which runs every 10 mins) scans for updates. It then downloads the new version, automatically installs dependencies, and deploys using PM2.</p>
    <p> I have NGINX Reverse Proxy Manager, combined with a Cloudflared Tunnel to transfer my traffic through the Cloudflare CDN.</p>
    <p> I also have a custom domain, which I purchased through GoDaddy, and set the records to transfer all web traffic to the Cloudflare. </p>
</body>