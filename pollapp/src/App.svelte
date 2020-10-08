<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  // we import the component-Tabs, just to use it in our page and send props for use.
  import Tabs from "./shared/tabs.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<style>
  main {
    max-width: 960;
    margin: 40px auto;
    text-align: center;
  }
</style>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <p>This is current polls, mate</p>
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm />
  {/if}
</main>
<Footer />
