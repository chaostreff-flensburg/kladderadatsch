<script>
  import { Library, Settings2 } from "lucide-svelte";

  import NavLink from "./NavLink.svelte";
  import ToolSelect from "./ToolSelect.svelte";
  import ToolView from "./ToolView.svelte";
</script>

<div class="fixed bottom-6 left-2 right-2 z-10 flex justify-center">
  <div
    class="w-5/6 max-w-xl rounded-3xl bg-white pl-4 pr-4 shadow-xl dark:bg-neutral-800"
  >
    <ToolView />
    <nav class="flex justify-between p-4">
      <NavLink href="/resources">
        <Library />
      </NavLink>
      <ToolSelect />
      <NavLink href="/settings">
        <Settings2 />
      </NavLink>
    </nav>
  </div>
</div>
<div
  class="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-50 dark:from-neutral-900"
/>
