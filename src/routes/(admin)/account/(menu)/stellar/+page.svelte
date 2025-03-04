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
  <a href="/account" class="btn btn-sm btn-outline">
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
    Back to Classroom
  </a>
</div>

<div class="prose max-w-none">
  <h1 class="text-2xl font-bold mb-4">Stellar Blockchain Course</h1>

  <p>
    Welcome to our Stellar blockchain course. This program is designed to
    introduce you to the fundamentals of the Stellar network and its
    applications in financial systems and community development.
  </p>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Meet Your Tutor: Rinat Enikeev</h2>
    <div class="flex items-center gap-4 mb-4">
      <img
        src="https://dobro.city/images/team/rinat.jpeg"
        alt="Rinat Enikeev"
        class="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h3 class="text-lg font-medium">Rinat Enikeev</h3>
        <p class="text-sm">Developer & Educator</p>
      </div>
    </div>
    <p>
      Throughout this course, Rinat will guide you through both theoretical
      concepts and hands-on exercises to ensure you develop a solid
      understanding of the Stellar ecosystem.
    </p>
  </div>

  <div class="my-6">
    <h2 class="text-xl font-semibold">What You'll Learn</h2>
    <ul class="list-disc pl-6 my-3">
      <li>
        Core concepts of the Stellar blockchain and its unique consensus
        mechanism
      </li>
      <li>Setting up and managing Stellar wallets</li>
      <li>Creating and managing assets on the Stellar network</li>
      <li>Implementing cross-border payment solutions</li>
      <li>Developing applications on the Stellar platform</li>
      <li>Best practices for security and compliance</li>
    </ul>
  </div>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Getting Started</h2>
    <p>
      To begin your journey with Stellar, you'll need to set up a Stellar
      wallet. Our first practical module will guide you through this process
      step by step.
    </p>
    <div class="mt-4">
      <a href="/account/stellar/wallet" class="btn btn-primary">
        Set Up Your Stellar Wallet →
      </a>
    </div>
    <p class="mt-3 text-sm">
      This introductory module covers wallet creation, security best practices,
      and your first transactions on the Stellar network.
    </p>
  </div>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Course Structure</h2>
    <p>
      The course is divided into modules that build upon each other, combining
      theoretical knowledge with practical exercises. You'll progress from basic
      concepts to advanced applications, with opportunities to apply your
      learning through real-world projects.
    </p>
    <p>
      By the end of this course, you'll have the skills to leverage Stellar
      blockchain technology for financial applications, community projects, and
      innovative solutions to real-world problems.
    </p>
  </div>
  <div class="my-6">
    <h2 class="text-xl font-semibold">Advanced Features</h2>
    <p>
      Once you're comfortable with the basics of Stellar, you can explore more
      advanced features that make the network powerful for financial
      applications.
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
</div>

<div class="mb-4">
  <a href="/account" class="btn btn-sm btn-outline">
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
    Back to Classroom
  </a>
</div>
