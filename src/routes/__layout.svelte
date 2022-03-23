<script>
  import "../app.css";

  import PageTransition from "../components/PageTransition.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<main class="m-4">
  <PageTransition>
    <slot />
  </PageTransition>

  <NavBar />
</main>
