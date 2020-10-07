<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/footer.svelte";
  import Tabs from "./shared/tabs.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
</script>

<style>
  main {
    max-width: 960;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {activeItem} {items} />
</main>
<Footer />
