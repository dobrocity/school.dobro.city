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
  <h2 class="text-xl font-semibold mt-6 mb-3">
    What is Multisignature in Stellar?
  </h2>
  <p>
    Multisignature (or multisig) is a powerful security feature in the Stellar
    blockchain that requires multiple signatures to authorize a transaction.
    Instead of a single private key controlling an account, multisig allows you
    to set up an account that needs approval from multiple parties before any
    transaction can be executed.
  </p>
  <ul class="list-disc pl-6 my-3">
    <li>Enhanced security through distributed control</li>
    <li>Protection against single points of failure</li>
    <li>Support for complex authorization schemes</li>
    <li>Ideal for business accounts, shared funds, and escrow arrangements</li>
  </ul>
  <p>
    Multisig on Stellar is highly configurable, allowing you to specify exactly
    how many signatures are required and from which specific accounts, providing
    both security and flexibility for your digital assets.
  </p>

  <h2 class="text-xl font-semibold mt-6 mb-3">
    How Multisignature Works in Stellar
  </h2>
  <p>
    Stellar implements multisig through what it calls "signers" and
    "thresholds." Each account can have multiple signers, and each transaction
    requires enough signatures to meet or exceed a specified threshold.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">
    Key Concepts of Stellar Multisig
  </h3>
  <ol class="list-decimal pl-6 my-3">
    <li>
      <strong>Signers</strong>: Any Stellar account or public key that has
      permission to sign transactions for your account
    </li>
    <li>
      <strong>Weights</strong>: Each signer is assigned a weight (a numerical
      value)
    </li>
    <li>
      <strong>Thresholds</strong>: Different operations require different
      threshold levels to be authorized
    </li>
    <li>
      <strong>Master Key</strong>: Your account's original key, which can be
      given reduced authority or removed entirely
    </li>
  </ol>
  <p
    class="bg-yellow-50 p-3 rounded-md border border-yellow-200 text-yellow-800"
  >
    <strong>Important:</strong> When setting up multisig, be extremely careful not
    to lock yourself out of your account. Always ensure you have access to enough
    signers to meet the threshold for all operations.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">Common Multisig Configurations</h3>
  <p>Here are some typical ways multisig is used on Stellar:</p>
  <ul class="list-disc pl-6 my-3">
    <li>
      <strong>2-of-3 Setup</strong>: Requires any 2 signatures from 3 possible
      signers
    </li>
    <li>
      <strong>Business Accounts</strong>: Requiring multiple executives to
      approve large transactions
    </li>
    <li>
      <strong>Backup Security</strong>: Adding trusted backup signers in case
      your primary key is compromised
    </li>
    <li>
      <strong>Time-locked Transactions</strong>: Combined with Stellar's time
      bounds for scheduled releases
    </li>
  </ul>

  <h3 class="text-lg font-medium mt-4 mb-2">
    Setting Up Multisig with DoBro Wallet
  </h3>
  <p>
    DoBro Wallet provides a user-friendly interface for creating and managing
    multisignature accounts on Stellar. You can add signers, set weights, and
    adjust thresholds directly from the app's security settings.
  </p>
  <p>
    To get started with multisig, you'll first need to create and fund a
    standard Stellar account through DoBro Wallet, then navigate to the security
    settings to configure your multisignature preferences.
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
