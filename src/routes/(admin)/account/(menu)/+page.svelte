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
    Start with the <a href="/account/stellar" class="link">Into Stellar</a> course
  </p>
</div>
