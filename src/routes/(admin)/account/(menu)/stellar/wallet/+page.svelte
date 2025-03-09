<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("stellar")
</script>

<svelte:head>
  <title>Into Stellar</title>
</svelte:head>

<div class="mb-4">
  <a href="/account/stellar" class="btn btn-sm btn-outline">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    Back to Stellar
  </a>
</div>

<div class="prose max-w-none">
  <h2 class="text-xl font-semibold mt-6 mb-3">What is Stellar Blockchain?</h2>
  <p>
    Stellar is an open-source, decentralized payment protocol that enables fast,
    cross-border transactions between any pair of currencies. Unlike many other
    blockchains, Stellar was designed specifically for financial applications,
    making it ideal for:
  </p>
  <ul class="list-disc pl-6 my-3">
    <li>Cross-border payments and remittances</li>
    <li>Creating digital representations of any currency</li>
    <li>Micropayments with minimal fees</li>
    <li>Banking the unbanked with accessible financial tools</li>
  </ul>
  <p>
    Stellar transactions typically settle in 3-5 seconds and cost a fraction of
    a cent, making it one of the most efficient blockchain networks available
    today.
  </p>

  <h2 class="text-xl font-semibold mt-6 mb-3">
    Creating Your Stellar Wallet with DoBro
  </h2>
  <p>
    To start using Stellar, you'll need a wallet. DoBro Wallet is a
    user-friendly mobile application that makes managing your Stellar assets
    simple and secure.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">Step 1: Download DoBro Wallet</h3>
  <p>Install DoBro Wallet from your device's app store:</p>
  <div class="flex flex-wrap gap-4 items-center">
    <a
      href="https://play.google.com/store/apps/details?id=city.dobro.wallet"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block"
    >
      <img
        alt="Get it on Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        class="h-16"
      />
    </a>
    <a
      href="https://apps.apple.com/ee/app/dobro-wallet/id6482980775"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block"
    >
      <img
        alt="Download on the App Store"
        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
        class="h-12"
      />
    </a>
  </div>

  <h3 class="text-lg font-medium mt-4 mb-2">Step 2: Create a New Wallet</h3>
  <ol class="list-decimal pl-6 my-3">
    <li>Open the DoBro Wallet app</li>
    <li>Tap "Add account"</li>
    <li>Tap "Create Account"</li>
    <li>Optionally set a password for an account</li>
    <li>Tap on "Create Account" button</li>
    <li>Backup your secret key</li>
    <li>Tap on "Click to reveal secret key" button</li>
    <li>Write down or copy your secret key</li>
    <li>
      <strong>Important:</strong> Your secret key is the only way to restore your
      wallet if you lose access. Never share it with anyone and keep it in a safe
      place offline.
    </li>
    <li>Tap on "Done" button</li>
  </ol>
  <p
    class="bg-yellow-50 p-3 rounded-md border border-yellow-200 text-yellow-800"
  >
    <strong>Important:</strong> Your secret key is the only way to restore your wallet
    if you lose access. Never share it with anyone and keep it in a safe place offline.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">Step 3: Fund Your Wallet</h3>
  <p>
    To activate your Stellar wallet, it needs to be funded with a minimum
    balance of 1 XLM. You can receive XLM from another user or purchase it from
    a cryptocurrency exchange.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">Next Steps</h3>
  <p>
    Once you've set up and funded your Stellar wallet, you're ready to explore
    more advanced features of the Stellar network.
  </p>
  <div class="mt-4">
    <a href="/account/stellar/multisig" class="btn btn-primary">
      Learn About Multisignature →
    </a>
  </div>
  <p class="mt-3 text-sm">
    Discover how multisignature accounts can enhance security and enable
    collaborative control of Stellar assets for businesses and organizations.
  </p>
</div>

<div class="mb-4 mt-6">
  <a href="/account/stellar" class="btn btn-sm btn-outline">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    Back to Stellar
  </a>
</div>
