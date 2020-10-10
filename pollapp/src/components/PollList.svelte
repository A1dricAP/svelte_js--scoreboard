<script>
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
      <!--forwarding the event to the App.svelte, by not declaring any function for it.-->
    </div>
  {/each}
</div>
