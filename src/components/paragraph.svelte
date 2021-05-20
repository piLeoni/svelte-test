<script>
    	import { onMount } from 'svelte';

    export let content = "ciao";
    let photos = [];

    onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	});
</script>

<div>
    --------------------------
    <h3>paragrafo</h3>
    <p>{content}</p>
    --------------------------
</div>

{#each photos as photo}
<img src={photo.url} alt=""/>
{:else}
<!-- this block renders when photos.length === 0 -->
<p>loading...</p>
{/each}
