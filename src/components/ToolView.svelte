<script>
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import { state } from "../components/store";
  import HabitTool from "./HabitTool.svelte";

  const tools = new Map()
  tools.set("HabitTool", HabitTool);
</script>

{#if $state.tools.selected && $page.url.pathname == "/"}
  <aside
    transition:slide={{ easing: expoOut }}
    class="w-full border-b-2 border-neutral-200 p-2 pb-3 dark:border-neutral-700"
  >
    <svelte:component this={tools.get($state.tools.selected)} />
  </aside>
{/if}
