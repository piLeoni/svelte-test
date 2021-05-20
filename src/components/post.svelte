<script>
    import { createEventDispatcher } from "svelte";
    export let title = "Title";
    export let content = `Eu reprehenderit id sit do sunt esse incididunt laborum. 
    In reprehenderit ad adipisicing ea quis et occaecat nisi aute sunt irure. 
    Occaecat officia duis sit dolor magna sit id. 
    Fugiat ad magna anim esse consequat laboris aute minim laborum dolore sunt. 
    Veniam reprehenderit consequat ipsum ad mollit nisi id enim. Enim duis ex 
    aliquip ut exercitation nisi laborum id. Id exercitation dolor minim labore pariatur.`;
    const dispatch = createEventDispatcher();
    function deleteMe() {
        dispatch("delete");
    }
</script>

<div class="post">
    <button on:click={ deleteMe}> delete</button>
    <h3>{title.toUpperCase()}</h3>
    <p>{content}</p>
</div>

<style>
    .post {
        border: 2px solid black;
        margin: 3px;
        padding: 5px;
        width: 500px;
    }
</style>