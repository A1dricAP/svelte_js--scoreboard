<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem;
</script>

<style>
  .tabs {
    margin-bottom: 40px;
    text-align: center;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>
