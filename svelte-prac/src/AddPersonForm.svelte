<!-- this file is creating the content of the modal component. -->
<script>
  import { self } from "svelte/internal";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher(); // creating an object of the imported dispatch func.

  let name;
  let beltColour;
  let age;
  //   let fighting = false;
  //   let sneaking = false;
  //   let running = false;
  let skills = []; // this array will contain the checked values from the html part. with the help of bind:group attribute.

  const handleSubmit = () => {
    const person = {
      name,
      beltColour,
      age,
      skills,
      id: Math.random(),
    };
    dispatch("addPerson", person);
    //using the dispatch object, to send a dispatch with the name 'addPerson' and sending the person data (2nd parameter).
    // this dispatch can be held wherever this component is imported.
  };
</script>

<style>
</style>

<!-- onSubmit is always declared on forms. -->
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="number" placeholder="Age" bind:value={age} />
  
  <label>Skills:</label>
  <!-- bind:checked is used to check if user has entered an input. And to connect it to user defined variable. -->
  <input type="checkbox" bind:group={skills} value="fighting">Fighting<br> <!--if checked, this value will be added to skills array.-->
  <input type="checkbox" bind:group={skills} value="sneaking">Sneaking<br> <!--if checked, this value will be added to skills array.-->
  <input type="checkbox" bind:group={skills} value="running">Running<br> <!--if checked, this value will be added to skills array.-->
  <!-- <input type="checkbox" bind:checked={fighting}>Fighting<br>
  <input type="checkbox" bind:checked={sneaking}>Sneaking<br>
  <input type="checkbox" bind:checked={running}>Running<br> -->
  <label>Belt Colour:</label>
  <select bind:value={beltColour}> <!--whatever value is selected, will be bound to beltColour, so that it is displayed in handleSubmit-->
      <option value="black">Black</option>
      <option value="brown">brown</option>
      <option value="orange">orange</option>
      <option value="white">white</option>
  </select>
  <button>Add Person 🙆‍♂️</button>
</form>
