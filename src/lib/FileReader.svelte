<script lang="ts">
  import Jedit from "./Jedit.svelte";
  let currFile = 0;
  let fileName = "";
  let fileSize = 0;
  let fileType = "";
  let fileList = [];
  let imgList = [];
  let jsonObj;
  let inputFile;
  let parseOut;
  let uploaded = {
    hasObjects: false,
    hasStrings: false,
    hasArrays: false,
    containsOnlyArrays: false,
  };
  function analyzeArray(arr) {
    return {
      hasObjects: arr.some(
        (item) =>
          typeof item === "object" && item !== null && !Array.isArray(item)
      ),
      hasStrings: arr.some((item) => typeof item === "string"),
      hasArrays: arr.some((item) => Array.isArray(item)),
      containsOnlyArrays: arr.every((item) => Array.isArray(item)),
    };
  }

  function checkImageList(array) {
    return array.every(
      (obj) =>
        obj.hasOwnProperty("width") &&
        obj.hasOwnProperty("height") &&
        obj.hasOwnProperty("link")
    );
  }
  function readFile() {
    const file = inputFile.files[0];
    fileSize = file.size;
    fileType = file.type;
    fileName = file.name;
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function () {
      try {
        const content = JSON.parse(fileReader.result);
        jsonObj = content;
        const check = analyzeArray(content);
        uploaded = { ...uploaded, ...check };
        if (check.hasObjects) {
          uploaded.objKeys = Object.keys(content[0]);
          if (checkImageList(content)) {
            fileList = [];
            imgList = content;
          } else {
            imgList = [];
            fileList = content;
          }
        }

        parseOut = JSON.stringify(content, null, " ");
      } catch (error) {
        console.error(error);
        console.log(fileReader.result);
      }
    };
    fileReader.onerror = function () {
      alert(fileReader.error);
    };
  }
  function clear() {
    files = new DataTransfer().files;
    parseOut = "";
    fileName = "";
    fileList = [];
    imgList = [];
    jsonObj = null;
    console.log({ uploaded, parseOut });
  }
</script>

<section class="layer nwp">
  <article class="p-4">
    <h1 class="display-2 fw-bold">NWP-Downloads</h1>

    <div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Load</label>
        <input
          class="form-control"
          accept="application/JSON"
          on:change={readFile}
          bind:this={inputFile}
          type="file"
          id="formFile"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Filename</label
        >
        <input
          bind:value={fileName}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="data.json"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Content</label
        >
        <textarea
          bind:value={parseOut}
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="&#123; ... &#125;"
          rows="8"
        ></textarea>
      </div>
    </div>

    <div>
      {#if fileList.length}
        <h2>Links</h2>
      {:else if imgList.length}
        <h2>Images</h2>
      {:else}
        <h2>Upload File</h2>
      {/if}
    </div>
  </article>
</section>

<section class="layer nwp bottom">
  <article class="p-4">
    <Jedit bind:jsonObj></Jedit>
  </article>
</section>
