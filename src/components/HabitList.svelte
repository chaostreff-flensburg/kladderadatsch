<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { expoOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  import { state } from "../components/store";
  import { toUnixTS } from "../utils/DateUtils";

  import Habit from "../components/Habit.svelte";

  $: sortedHabits = sortHabits($state.habits.toJSON());

  onMount(() => {
    let sortInterval = setInterval(() => {
      sortHabits();
    }, 1000 * 60);

    return () => {
      clearInterval(sortInterval);
    };
  });

  function sortHabits() {
    sortedHabits = [...$state.habits.toJSON()];

    sortedHabits.forEach((habit, i) => {
      sortedHabits[i].weight = habitWeight(habit);
    });

    return sortedHabits.sort((a, b) => {
      if (!a.lastDone) return -1;
      if (a.weight >= b.weight) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  function habitWeight(habit) {
    return percentageElapsed(habit);
  }

  function percentageElapsed(habit) {
    return ((Date.now() - toUnixTS(habit.lastDone)) / habit.interval) * 100;
  }
</script>

<ul class="m-auto flex flex-col items-center p-2">
  <!-- <li class="w-full max-w-lg h-32 m-2"></li> -->
  {#each sortedHabits as habit (habit._id)}
    <li
      animate:flip={{ easing: expoOut }}
      transition:fade={{ intro: true, easing: expoOut }}
      class="flex w-full justify-center"
    >
      <Habit _id={habit._id} />
    </li>
  {/each}
</ul>
