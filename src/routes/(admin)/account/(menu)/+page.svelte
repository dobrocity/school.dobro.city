<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-screen">
  <p class="text-gray-600">
    🚧 This dashboard is currently under construction. Check back soon for
    updates!
  </p>
</div>
