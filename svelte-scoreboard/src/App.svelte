<script>
  import Navbar from "./navbar.svelte";
  import Player from "./Player.svelte";
  import AddPlayer from "./Addplayer.svelte";
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

  const addPlayer = (e) => {
    const newPlayer = e.detail;
    players = [...players, newPlayer]; // * this line to add player to the list
  };

  const removePlayer = (e) => {
    players = players.filter((player) => player.name !== e.detail); //* this is to delete the player details.
  };
</script>

<Navbar />
<div class="container">
  <AddPlayer on:addplayer={addPlayer} />
  {#if players.length === 0}
    <p>No players</p>
  {:else}
    {#each players as player}
      <Player
        name={player.name}
        score={player.score}
        on:removeplayer={removePlayer} />
    {/each}
  {/if}
</div>
