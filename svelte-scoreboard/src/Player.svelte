<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { bind } from "svelte/internal";

  export let name;
  export let score;
  let showControls = false;
  const toggleControls = () => {
    showControls = true;
  };
  const addPoint = () => {
    score += 1;
  };

  const removePoint = () => {
    score -= 1;
  };

  const onDelete = () => dispatch("removeplayer", name);
</script>

<style>
  h1 {
    color: #204f6e;
  }
  h3 {
    margin-bottom: 10px;
  }
</style>

<div class="card">
  <h1>
    {name}!
    <button class="btn btn-sm" on:click={toggleControls}>{#if showControls}
        -
      {:else}+{/if}</button>
    <button class="btn btn-danger btn-sm" on:click={onDelete}>X</button>
  </h1>
  <h3>Score: {score}</h3>

  {#if showControls}
    <button class="btn" on:click={addPoint}>+1</button>
    <button class="btn" on:click={removePoint}>-1</button>
    <input type="number" bind:value={score} />
  {/if}
</div>
