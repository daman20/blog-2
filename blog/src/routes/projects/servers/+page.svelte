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
    img {
        max-width: 100%;
        max-height: 400px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
<Top />
<body>
    <h3>An Early Start</h3>
    <p>When I was 11, the computer that I built crashed while playing Roblox. I had recieved the dreaded Windows 10 Blue Screen of Death, and was going to do my best to fix it. I tried many times, but could never get it to POST again. I was <b> devastated </b>. I had dozens of coding projects on that desktop that were lost. So, I decided to build a NAS to backup my computer to</p>
    <p> I was able to build a small TrueNAS (at the time, FreeNAS) server, with hard drives from old computers of my family members. I didn't know it then, but I was soon to get addicted.</p>
    <p> I backed up my family's computers, and ripped DVD's into my Plex server. </p>
    <p> This was my first exposure to a Nix terminal, and I learned basic commands that would serve me well through my programming journey</p>
    <h3>Moving to Unraid</h3>
    <p> However great FreeNAS was for exposure, I quickly realized that lack of flexiblity through a traditional RAID 5 setup prevented me from growing my array in the way I liked.</p>
    <p> So, I switched to Unraid, and took every drive I could find around the house to add to the array. </p>
    <p> I created Docker's for Plex, MakeMKV, and later, Photoprism (see <a href="/projects/digitizing-photos">here</a>) and Pihole.</p>
    <p> I also created Virtual Machines for Home Assistant and a few gaming servers. However, I quickly found that the gaming servers were overloading my NAS, as I specced it to only be a storage device.</p>
    <h3> Proxmox </h3>
    <p> I realized that I could create a virtualization cluster using proxmox. After finding a deal on 3 HP DL380P's at an enterprise auction, I began my journey on Proxmox.</p>
    <img src="/etc-photos/DL380s.JPG" alt="Proxmox Cluster" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <p style="font-size: 0.98rem; color: #555; font-style: italic; margin-top: 0.5rem; margin-bottom: 2rem; text-align: center; max-width: 600px;">
        My Proxmox cluster: three HP DL380P servers stacked in my homelab rack.
    </p>
    <p> First, I set up a network subnet, and began building the cluster. Then, I migrated my VMs and Docker containers to the new cluster. I also set up a storage cluster by linking back to my NAS over a gigabit switch, which allowed me to have a centralized storage system that could be expanded dynamically.</p>
    <p> I also set up a few other VMs, including a Minecraft server, PBX server, and a few others.</p>
    <p> All of my servers are named after the Avengers. The NAS is named IronMan, and the Proxmox servers are named Thor, Loki (this was the one giving me trouble), and Spiderman.</p>
    <p> Finally, I wrote <a href="/projects/website"> custom deployment scripts for an Ubuntu VM for hosting this website </a></p>
</body>