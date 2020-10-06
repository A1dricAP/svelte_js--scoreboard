<script>
  import Modal from "./Modal.svelte"; //the name of the imported component can be anything
  import AddPersonForm from "./AddPersonForm.svelte";
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

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<!-- these styles are component specific. and will not style anyother component with same tags. -->
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
<Modal   showModal={showModal} isPromo={false} on:click={toggleModal}>
  <AddPersonForm/>
</Modal>
<!-- instead of using props to render big HTML content, we can use slots. Slots are defined by creating content
     within the modal element. 
<!--this on:click is basically the forwaded event from the Modal.svelte file. And fires the toggleModal() method.-->
<!-- Basically these values are called props. these are passed on to the file where Modal component resides. -->

<main>
  <button on:click|once={toggleModal}>Open Modal</button>
  <!-- by piping "once" event modifier, we're telling browser to enable button reference, 
    
    "toggleModal" method only once.-->

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
