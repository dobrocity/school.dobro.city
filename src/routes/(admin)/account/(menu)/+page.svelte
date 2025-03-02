<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Classroom</title>
</svelte:head>

<div class="prose max-w-none">
  <h1 class="text-2xl font-bold mb-4">Welcome to DoBro City School</h1>

  <p>
    DoBro City School is an innovative educational platform focused on teaching
    practical skills for urban design and community development. Our curriculum
    combines financial literacy with hands-on design experience to empower
    students to create positive change in their communities.
  </p>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Our Approach</h2>
    <p>
      We believe in learning by doing. Our courses are structured around
      real-world projects that allow students to apply their knowledge
      immediately. Through our platform, you'll gain access to:
    </p>
    <ul class="list-disc pl-6 my-3">
      <li>
        <strong>Practical Design Skills</strong> - Learn to create functional and
        beautiful urban elements
      </li>
      <li>
        <strong>Financial Management</strong> - Understand how to budget and fund
        community projects
      </li>
      <li>
        <strong>Community Engagement</strong> - Develop strategies for involving
        local stakeholders
      </li>
    </ul>
  </div>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Our Tools</h2>

    <div class="my-4">
      <h3 class="text-lg font-medium">Stellar for Financial Management</h3>
      <p>
        We use the Stellar blockchain platform to teach financial management and
        transparency. Through Stellar, students learn to:
      </p>
      <ul class="list-disc pl-6 my-3">
        <li>Create and manage project budgets with real-time tracking</li>
        <li>Understand micro-financing for community projects</li>
        <li>Implement transparent financial systems for accountability</li>
        <li>Process cross-border payments and donations efficiently</li>
      </ul>
      <p>
        Our Stellar integration provides hands-on experience with modern
        financial tools that are increasingly important in community development
        work.
      </p>
    </div>

    <div class="my-4">
      <h3 class="text-lg font-medium">SketchUp for PopUp City Design</h3>
      <p>
        SketchUp is our primary design tool for creating PopUp City elements -
        temporary, modular urban installations that can transform public spaces.
        With SketchUp, students:
      </p>
      <ul class="list-disc pl-6 my-3">
        <li>Design modular furniture, kiosks, and small structures</li>
        <li>Create 3D models of community spaces and interventions</li>
        <li>Develop technical drawings for actual construction</li>
        <li>Visualize projects in context using geo-location features</li>
      </ul>
      <p>
        The skills learned through our SketchUp curriculum enable students to
        quickly prototype and iterate on designs that can be implemented in real
        urban environments.
      </p>
    </div>
  </div>

  <div class="my-6">
    <h2 class="text-xl font-semibold">Get Started</h2>
    <p>
      Explore our curriculum using the navigation menu. We recommend starting
      with the introductory courses for both Stellar and SketchUp before moving
      on to the project-based learning modules.
    </p>
    <div class="flex flex-wrap gap-4 mt-4">
      <a href="/account/stellar" class="btn btn-primary"
        >Explore Stellar Courses</a
      >
      <a href="/account/sketchup" class="btn btn-primary"
        >Explore SketchUp Courses</a
      >
    </div>
  </div>
</div>
