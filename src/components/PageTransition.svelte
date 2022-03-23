<script>
  import { page } from "$app/stores";
  import { slide, fade } from "svelte/transition";
</script>

{#key $page.url.pathname}
  <div in:slide>
    <div in:fade>
      <slot />
    </div>
  </div>
{/key}
