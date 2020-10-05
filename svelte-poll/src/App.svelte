<script>
  import Modal from "./Modal.svelte"; //the name of the imported component can be anything

  let people = [
    { name: "aldric", beltcolour: "black", age: 20, id: 1 },
    { name: "aaron", beltcolour: "orange", age: 15, id: 2 },
    { name: "jon", beltcolour: "red", age: 18, id: 3 },
  ];

  const handleClick = (id) => {
    // console.log(id);
    people = people.filter((person) => person.id != id);
    // filter javascript method to remove objects.
    // we can give any name in place of <person>
  };

  let num = 5;
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

<!-- using the Modal component here. -->
<Modal/>
<main>
  {#if num > 5}
    <p>num greater than 5</p>
  {:else if num > 20}
    <p>num greater than 20</p>
  {:else}
    <p>number greater than 3</p>
  {/if}
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.beltcolour === 'black'}
        <p><strong>MASTER NINJA!</strong></p>
      {/if}
      <p>{person.beltcolour} belt, and is {person.age} years old!</p>
      <button on:click={() => handleClick(person.id)}>Delete</button>
      <!-- in the on:click function, we use {()=>handleClick()} to prevent handleClick method from invoking. -->
      <!-- basically wrapping the method with the help of callback function `()` -->
    </div>
  {:else}
    <p>There are no people mate...☹️</p>
  {/each}
</main>
