<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("sketchup")
</script>

<svelte:head>
  <title>Into SketchUp</title>
</svelte:head>

<div class="prose max-w-none">
  <h2 class="text-xl font-semibold mt-6 mb-3">What is SketchUp?</h2>
  <p>
    SketchUp is a powerful 3D modeling software that allows users to create,
    modify, and share 3D models. Known for its user-friendly interface and
    intuitive tools, SketchUp is widely used in architecture, interior design,
    landscape architecture, civil and mechanical engineering, film, and video
    game design.
  </p>
  <p>
    The free web-based version, SketchUp Free, offers essential modeling
    capabilities through your browser without requiring any downloads or
    installations.
  </p>

  <h2 class="text-xl font-semibold mt-6 mb-3">
    Getting Started with SketchUp Free
  </h2>
  <p>
    SketchUp Free is accessible to anyone with an internet connection. Here's
    how to get started with this powerful 3D modeling tool.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">
    Step 1: Create a Trimble Account
  </h3>
  <p>To use SketchUp Free, you'll need to create a free Trimble account:</p>
  <ol class="list-decimal pl-6 my-3">
    <li>
      Visit <a
        href="https://app.sketchup.com/app"
        target="_blank"
        rel="noopener noreferrer"
        class="link font-medium">SketchUp Free</a
      >
    </li>
    <li>Click "Sign Up" if you don't have an account</li>
    <li>Fill in your details and create your account</li>
    <li>Verify your email address if required</li>
  </ol>

  <h3 class="text-lg font-medium mt-4 mb-2">Step 2: Launch SketchUp Free</h3>
  <p>Once you have an account:</p>
  <ol class="list-decimal pl-6 my-3">
    <li>Log in to your Trimble account</li>
    <li>Select "SketchUp Free" from the available options</li>
    <li>
      Choose a template to start with (architectural, product design, etc.)
    </li>
    <li>Click "Start Modeling" to open the workspace</li>
  </ol>

  <h3 class="text-lg font-medium mt-4 mb-2">Step 3: Learn the Basic Tools</h3>
  <p>SketchUp Free offers several essential tools for 3D modeling:</p>
  <ul class="list-disc pl-6 my-3">
    <li><strong>Select Tool:</strong> Click to select objects in your model</li>
    <li><strong>Line Tool:</strong> Create edges and shapes</li>
    <li><strong>Rectangle Tool:</strong> Draw rectangular shapes</li>
    <li><strong>Circle Tool:</strong> Create circular shapes</li>
    <li><strong>Push/Pull Tool:</strong> Extrude 2D shapes into 3D objects</li>
    <li><strong>Move Tool:</strong> Reposition elements in your model</li>
    <li><strong>Orbit Tool:</strong> Rotate your view around the model</li>
    <li><strong>Pan Tool:</strong> Move your view across the model</li>
    <li><strong>Zoom Tool:</strong> Zoom in and out of your model</li>
  </ul>

  <h3 class="text-lg font-medium mt-4 mb-2">
    Step 4: Create Your First 3D Model
  </h3>
  <p>Try creating a simple 3D model to practice:</p>
  <ol class="list-decimal pl-6 my-3">
    <li>Select the Rectangle tool and draw a rectangle on the ground plane</li>
    <li>
      Use the Push/Pull tool to extrude the rectangle upward, creating a box
    </li>
    <li>Try adding details with the Line tool</li>
    <li>Experiment with the Move tool to adjust parts of your model</li>
    <li>Use Orbit, Pan, and Zoom to navigate around your creation</li>
  </ol>
  <p
    class="bg-yellow-50 p-3 rounded-md border border-yellow-200 text-yellow-800"
  >
    <strong>Tip:</strong> SketchUp offers excellent tutorials in their Help Center.
    Click the "?" icon in the application to access guides and video tutorials that
    can help you learn more advanced techniques.
  </p>

  <h3 class="text-lg font-medium mt-4 mb-2">
    Step 5: Save and Share Your Work
  </h3>
  <p>SketchUp Free automatically saves your work to the cloud. You can also:</p>
  <ul class="list-disc pl-6 my-3">
    <li>Export your model in various formats</li>
    <li>Share your model with others via a link</li>
    <li>Publish your work to the 3D Warehouse for others to use</li>
    <li>Create presentations or walkthroughs of your model</li>
  </ul>
  <p>
    With practice, you'll be able to create increasingly complex and detailed 3D
    models using SketchUp Free's intuitive tools and interface.
  </p>
</div>
