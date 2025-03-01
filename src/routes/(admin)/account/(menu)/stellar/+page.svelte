<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("stellar")
</script>

<svelte:head>
  <title>Into Stellar</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">Into Stellar</h1>

<a
  href="https://play.google.com/store/apps/details?id=city.dobro.wallet"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    alt="Get it on Google Play"
    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    class="h-16"
  />
</a>
