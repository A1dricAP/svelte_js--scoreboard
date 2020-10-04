<script>
  import { text } from "svelte/internal";

  let firstName = "aldric";
  let lastName = "ap";
  let beltColour = "black";

  $: fullName = `${firstName} ${lastName}`;
  // this is a reactive value.
  // this value automatically updates the fullName value, when either of the two variables
  // value change.
  $: {
    console.log(beltColour);
    console.log(fullName);
  }

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
  <p>{fullName} - {beltColour} belt!</p>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColour} />
</main>
