<script>
  import { AlertTriangle } from "lucide-svelte";

  import HabitList from "../components/HabitList.svelte";
</script>

<div
  class="m-auto mb-2 w-full max-w-lg rounded-md border border-red-500 p-4 font-mono"
>
  <h1 class="text-lg font-medium">
    <AlertTriangle class="mb-1 mr-2 inline h-8 text-red-500" />Unstable
    Software!
  </h1>
  <p class="text-xs">
    This app is in development. Things will change and break, features are
    missing and <b>data entered may be lost</b>. Bug reports and feedback are
    welcome at
    <a
      href="http://github.com/chaostreff-flensburg/kladderadatsch"
      target="_blank"
      class="text-sky-500">our GitHub repo</a
    >.
  </p>
</div>
<HabitList />
