<script>
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import * as timeago from "timeago.js";
  import { AlarmClock, Flame, Repeat, Trash } from "lucide-svelte";

  import { state } from "./store";
  import { toUnixTS } from "../utils/DateUtils";

  export let _id;

  let hidden = false;
  let open = false;
  function toggleOpen() {
    open = !open;
  }

  let habit = $state.habits[$state.habits.findIndex((el) => el._id === _id)];

  let since = timeago.format(habit.lastDone);

  onMount(() => {
    let update = setInterval(() => {
      since = timeago.format(habit.lastDone);
      if (Date.now() - toUnixTS(habit.lastDone) > habit.interval) {
        habit.streak = 0;
      }
    }, 1000 * 60);

    return () => {
      clearInterval(update);
    };
  });

  function setLastDone() {
    if (Date.now() - toUnixTS(habit.lastDone) <= habit.interval) {
      habit.streak++;
    } else {
      habit.streak = 1;
    }

    habit.lastDone = new Date().toISOString();
  }

  function deleteHabit() {
    // Avoids flashes of undefined on delete.
    hidden = true;
    $state.habits.splice(
      $state.habits.findIndex((el) => el._id === habit._id),
      1
    );
  }
</script>

{#if !hidden}
  <div
    class="mb-2 w-full max-w-lg divide-y-2 divide-neutral-100 overflow-hidden rounded-md bg-white shadow-md dark:divide-neutral-700 dark:bg-neutral-800"
  >
    <div class="flex">
      <div on:click={toggleOpen} class="grow cursor-pointer p-4">
        <div class="text-xl font-semibold">{habit.title}</div>
        <div
          class="flex justify-between text-sm font-light text-slate-500 dark:text-slate-400"
        >
          {#if habit.lastDone}
            <span>{since}</span>
          {:else}
            <span />
          {/if}
          {#if habit.streak}
            <span transition:fade class="flex"
              >{habit.streak}<Flame class="mt-[0.5px] ml-px h-4 w-4" /></span
            >
          {/if}
        </div>
      </div>

      <div class="h-12 self-center justify-self-end border-r-2" />

      <button on:click={setLastDone} class="p-4"> ● </button>
    </div>

    {#if open}
      <div transition:slide class="grid grid-cols-2 p-4">
        <div class="col-start-2 text-right">
          {(habit.interval / 3600000).toFixed(2)} h<Repeat
            class="-mt-1 inline h-5"
          />
        </div>
        <div class="col-start-2 mt-2 hidden text-right">
          {habit.preferedTime}<AlarmClock class="mb-1 inline h-5" />
        </div>
        <button
          on:click={deleteHabit}
          class="mt-2 w-fit rounded-md bg-red-600 p-2 px-4 text-white"
          ><Trash /></button
        >
      </div>
    {/if}
  </div>
{/if}
