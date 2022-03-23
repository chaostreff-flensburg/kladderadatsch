<script>
  import { dev } from "$app/env";
  import { nanoid } from "nanoid";
  import { AlarmClock, PlusSquare, Repeat } from "lucide-svelte";

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

<details
  class="mt-2 w-full max-w-lg rounded-md bg-white p-4 shadow-sm dark:bg-neutral-800"
>
  <summary class="cursor-pointer outline-none">New Habit</summary>
  <form
    id="HabitCreator"
    on:submit|preventDefault={addHabit}
    class="mt-2 flex w-full max-w-lg flex-col"
  >
    <input
      type="text"
      name="title"
      placeholder="Habit Name"
      bind:value={newHabit.title}
      required
      class="text-2xl focus:outline-none"
    />

    <div class="mt-2 flex justify-between">
      <div>
        <label for="interval">
          <!-- FIX: Icons as labels are not accessible. -->
          <Repeat class="-mr-1 inline h-5" />
        </label>
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
        <!-- FIX: default selection not showing on mount -->
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

      <div>
        <input
          type="time"
          name="preferedTime"
          id="preferedTime"
          bind:value={newHabit.preferedTime}
          class="focus:outline-none"
        />
        <label for="preferedTime">
          <!-- FIX: Icons as labels are not accessible. -->
          <AlarmClock class="mb-1.5 inline h-5" />
        </label>
      </div>
    </div>

    <button
      type="submit"
      class="mt-4 flex max-w-fit items-center justify-center self-end rounded-md bg-sky-600 p-2 px-4 text-lg font-medium text-white"
    >
      Create Habit
      <PlusSquare class="ml-1" />
    </button>
  </form>
</details>

<style>
  input[type="time"]::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
</style>
