<script>
  import { dev } from "$app/env";
  import { nanoid } from "nanoid";
  import { PlusSquare, Repeat } from "lucide-svelte";

  import { state } from "../components/store";

  let newHabit = {
    title: "",
    interval: 86400000,
    streak: 0,
    preferedTime: timeNow(),
  };

  function addHabit() {
    newHabit._id = nanoid();
    $state.habits.push(newHabit);
    newHabit.preferedTime = timeNow();
  }

  function timeNow() {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  }
</script>

<details class="py-2">
  <summary
    class="m-auto mt-1 max-w-xs cursor-pointer rounded-lg bg-sky-600 p-2 text-center text-lg font-bold text-white"
    >Add Habit <PlusSquare class="-mt-1 inline-block" /></summary
  >
  <form
    id="HabitCreator"
    on:submit|preventDefault={addHabit}
    class="flex flex-wrap justify-between"
  >
    <input
      type="text"
      name="title"
      placeholder="Habit Name"
      bind:value={newHabit.title}
      required
      class="mb-4 w-full flex-grow rounded-md bg-neutral-50 p-2 text-xl shadow-sm focus:outline-none dark:bg-neutral-700"
    />
    <div class="flex flex-grow-0 flex-col">
      <label
        for="interval"
        class="text-sm text-neutral-500 dark:text-neutral-400"
      >
        Repeat every:
      </label>
      <div class="mt-1.5">
        <Repeat class="-mr-2 -mt-0.5 inline h-4" />
        <input
          type="number"
          name="interval"
          id="interval"
          min="1"
          step="1"
          value="1"
          required
          class="w-10 text-right focus:outline-none"
        />
        <select
          name="intervalMultiplier"
          id="intervalMultiplier"
          bind:value={newHabit.interval}
          required
          class="focus:outline-none"
        >
          {#if dev}
            <option value={60000}>Minutes</option>
          {/if}
          <option value={3600000}>Hours</option>
          <option value={86400000}>Days</option>
          <option value={604800000}>Weeks</option>
        </select>
      </div>
    </div>

    <button
      type="submit"
      class="flex w-fit items-center justify-center rounded-full bg-sky-600 p-4 text-lg font-medium text-white shadow-sm shadow-sky-600/5 transition hover:shadow-md hover:shadow-sky-600/25"
    >
      <PlusSquare class="scale-110" />
    </button>
  </form>
</details>

<style>
  details > summary {
    list-style: none;
  }

  details > summary::marker, /* Latest Chrome, Edge, Firefox */ 
  details > summary::-webkit-details-marker /* Safari */ {
    display: none;
  }

  details[open] summary {
    display: none;
  }
</style>
