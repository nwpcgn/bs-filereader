<script lang="ts">
  import { onMount } from "svelte";

  // documentation: https://github.com/josdejong/svelte-jsoneditor
  import { JSONEditor, type Content } from "svelte-jsoneditor";
  export let jsonObj;
  let mainMenuBar = true,
    navigationBar = true,
    statusBar = true;
  let contentJE: Content = {
    text: undefined,
    json: {
      array: [1, 2, 3],
      boolean: true,
      color: "#82b92c",
      null: null,
      number: 123,
      object: { a: "b", c: "d" },
      string: "Hello World",
    },
  };
  $: if (jsonObj) {
    contentJE = { json: jsonObj };
  }
  $: console.log("contents changed:", contentJE);
</script>

<div class="editor">
  <JSONEditor
    bind:content={contentJE}
    {mainMenuBar}
    {navigationBar}
    {statusBar}
    onChange={() => console.log("change")}
  />
</div>

<style>
  .editor {
    width: 100%;
    height: 400px;
  }
</style>
