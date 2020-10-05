<script>
  export let message = "DEFAULT VALUE"; // this line means that we've imported the message from outside. Because of the "export" keyword.
  export let showModal = false;
  export let isPromo = false;
</script>

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }

  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background-color: aliceblue;
  }

  .promo .modal {
    background: orchid;
    color: antiquewhite;
  }
</style>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click>
    <!--by not declaring the value of click event, we're forwarding 
    the click event to the component where it is declared. In this case, to the Modal component imported in the App.svelte file.-->
    <!--here, class:promo will be set, if whatever value within parenthesis is true. Basically adding a new class.-->
    <div class="modal">
      <p>{message}</p>
    </div>
  </div>
{/if}
