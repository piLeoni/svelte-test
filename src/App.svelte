<script>
    import Post from "./components/post.svelte";
    let contents = fetch('contents.json').then(res => res.json());
    // import json from './public/contents.json';
    // console.log(paragraphs)
</script>

<h1>app</h1>
<!-- 
{#each posts as post, i}
    <Post title={post} on:delete={() => deletePost(i)} />
{/each} -->

{#await contents}
    <p>Loading Contents</p>
{:then result}

{#each result.paragraphs as post, i}
        <Post title={post.title} />
    {/each}
{/await}