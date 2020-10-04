<script>
  import { text } from "svelte/internal";

  let name = "aldric_ap";
  let beltColour = "black";

  const handleClick = () => {
    beltColour = "orange";
  };

  //* taking e as the event parameter.
  const handleInput = (e) => {
    beltColour = e.target.value; // target being the field, where an action has taken place and value being the value of the target.
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p style="color:{beltColour}">{beltColour} belt!</p>
  <button on:click={handleClick}>Update colour!</button>

  <!-- for the input field, "value" is to set the default value of the input box, in this case, the beltColour value. -->
  <input type="text" on:input={handleInput}  />

  <!-- this input field demos two-way binding. With the help of the "bind" keyword. -->
  <input type="text" bind:value={beltColour} />
</main>
