<script>
  import { afterUpdate } from "svelte";
  import { AlertTriangle } from "lucide-svelte";
  import QRCode from "qrcode";

  import { getSyncKey, setSyncKey, hardReset } from "../components/store";

  let key = getSyncKey();
  let canvas;

  afterUpdate(() => {
    let content = window.location.origin + "/?syncKey=" + key;
    canvas = document.getElementById("syncQR");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    QRCode.toCanvas(canvas, content, { margin: 1, width: canvas.offsetWidth });
  });

  function setKey(e) {
    if (e.code !== "Enter") return;
    setSyncKey(e.target.value);
    key = getSyncKey();
  }
</script>

<div class="p-4 pt-8">
  <h1 class="mb-2 text-3xl font-bold">Settings</h1>
  <canvas id="syncQR" class="mt-4 aspect-square max-w-sm" />
  <i class="text-neutral-400">Scan this code to sync to another device.</i>
  <details class="mt-4">
    <summary>Sync-Settings</summary>
    <div class="flex flex-col">
      <code
        >Sync-Key: <input
          type="text"
          name="keyInput"
          id="keyInput"
          value={key}
          on:keyup={setKey}
          class="w-full"
        /></code
      >
    </div>
  </details>
  <details class="mt-4">
    <summary>Danger Zone</summary>
    <button
      on:click={hardReset}
      class="mt-8 w-fit rounded-md bg-red-600 p-2 px-4 text-white"
      ><AlertTriangle class="mb-1 mr-2 inline h-8" />Hard Reset</button
    >
  </details>
</div>
