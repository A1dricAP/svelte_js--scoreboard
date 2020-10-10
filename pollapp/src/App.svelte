<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  // we import the component-Tabs, just to use it in our page and send props for use.
  import Tabs from "./shared/tabs.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  let polls = [
    {
      id: 1,
      question: "Python or Javascript?",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 15,
    },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { id, option } = e.detail; //by destructuring, getting the id and option objects from the object we passed into the function as a parameter
    let copiedPolls = [...polls];
    let upvotedPolls = copiedPolls.find((poll) => poll.id == id);
    //this find() basically searches through the polls object to find the equal value.

    if (option === "a") {
      upvotedPolls.votesA++;
    }
    if (option === "b") {
      upvotedPolls.votesB++;
    }

    polls = copiedPolls;
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
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />
