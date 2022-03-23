<script>
  import { page } from "$app/stores";

  export let href;
  export let active = "text-sky-600 scale-125";
  export let transition = "transition ease-out";
</script>

<a {href} class={transition + ($page.url.pathname == href ? " " + active : "")}>
  <slot />
</a>
