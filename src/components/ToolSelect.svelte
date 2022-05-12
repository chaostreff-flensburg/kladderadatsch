<script>
  import { page } from "$app/stores";
  import { LayoutDashboard } from "lucide-svelte";
  import { Plus } from "lucide-svelte";

  import { state } from "../components/store";
  import NavLink from "./NavLink.svelte";

  const tools = [{ name: "HabitTool", color: "sky-600" }];
</script>

{#if $page.url.pathname == "/"}
  {#each tools as tool}
    <a
      on:click|preventDefault={() => {
        $state.tools.selected == tool.name
          ? ($state.tools.selected = null)
          : ($state.tools.selected = tool.name);
      }}
      href="?"
      class="scale-{$state.tools.selected == tool.name
        ? '125 shadow-sm'
        : '150 shadow-md'} transition bg-{tool.color} rounded-full text-neutral-50 shadow-sky-600/5 hover:shadow-sky-600/10"
    >
      <Plus class="scale-75" />
    </a>
  {/each}
{:else}
  <NavLink href="/">
    <LayoutDashboard />
  </NavLink>
{/if}
