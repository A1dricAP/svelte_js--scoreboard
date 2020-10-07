import App from "./App.svelte";

const app = new App({
  //* this "target" means that we're
  //* injecting the imported App into the body of the DOM.
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
