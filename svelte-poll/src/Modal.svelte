<script>
  export let message = "DEFAULT VALUE"; // this line means that we've imported the message from outside. Because of the "export" keyword.
  let showModal = true;
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
    background: antiquewhite;
    color: darkcyan;
  }
</style>

{#if showModal}
  <div class="backdrop" class:promo={isPromo}>
    <!--here, class:promo will be set, if whatever value within parenthesis is true. Basically adding a new class.-->
    <div class="modal">
      <p>{message}</p>
    </div>
  </div>
{/if}
