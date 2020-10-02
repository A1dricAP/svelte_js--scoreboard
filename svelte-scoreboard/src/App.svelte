<script>
  import Navbar from "./navbar.svelte";
  import Player from "./Player.svelte";
  import { bind } from "svelte/internal";

  let players = [
    {
      name: "Aaron_ap",
      score: 53,
    },
    {
      name: "Aldric_ap",
      score: 67,
    },
    {
      name: "bendover",
      score: 69,
    },
  ];
</script>

<Navbar />
<div class="container">
  {#if players.length === 0}
    <p>No players</p>
  {:else}
    {#each players as player}
      <Player name={player.name} score={player.score} />
    {/each}
  {/if}
</div>
