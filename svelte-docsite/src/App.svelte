<script>
	import Logo from './components/Logo.svelte'
	import Sidebar from './components/Sidebar.svelte'
	import {transition, duration, easing} from './store.js'

	let active_transition = transition
	let last_chosen = transition
	let speed = duration
	let ease = easing

	transition.subscribe(txn => {
		last_chosen = txn
		active_transition = txn
	})

	function demoClick() {
		active_transition = last_chosen
	}

	function transitionFinished() {
		active_transition = active_transition.includes('out')
			? active_transition.replace('out','in')
			: ''
	}
</script>

<svelte:head>
	<title>Transition.css - easy transitions with clip-path</title>
	<link rel="stylesheet" href="https://unpkg.com/transition-style">
	<meta name="theme-color" content="#498aeb">
  <meta name="description" content="Drop-in CSS transitions">
</svelte:head>

<main>

	<section class="backdrop">
		<Logo backdrop=true/>
	</section>

	<section transition="{active_transition}" 
		on:click={demoClick}
		on:animationend={transitionFinished}
		style="
			--transition__duration: {$duration}s;
			--transition__easing: {$ease};
		"
	>
		<Logo/>
	</section>

	<Sidebar />

</main>

<style>
	:root {
	  --surface: hsl(0 0% 6%);
		--surfaceHSL: 0 0% 6%;
	  --text: hsl(0 0% 78%);
	  --white: hsl(205 100% 94%);
	  --brand: hsl(208 46% 45%);
		--brandHSL: 208 46% 45%;
	  --brand-alt: hsl(205 100% 85%);
	}

	@media (prefers-color-scheme: light) {
		:root {
			--surface: hsl(0 0% 100%);
			--surfaceHSL: 0 0% 100%;
			--text: hsl(0 0% 27%);
			--white: hsl(0 0% 100%);
			--brand: hsl(216 80% 54%);
			--brandHSL: 216 80% 54%;
		}
	}

	@keyframes circle-swoop {
	  from {
	    clip-path: var(--circle-top-right-out);
	  }
	  to {
	    clip-path: var(--circle-bottom-right-in);
	  }
	}

	[transition="in:custom:circle-swoop"] {
	  --transition__duration: 5s;
	  animation-name: circle-swoop;
	}

	:global(body) {
		background-color: var(--surface);
	  color: var(--text);
	  font-family: system-ui, sans-serif;
	  min-block-size: 100vh;
	  padding: 0;
	}

	main {
	  display: grid;
		grid: [stack] 1fr / [stack] 1fr [sidebar] auto;
	}

	main > section {
		grid-area: stack;
    background-color: hsl(var(--brandHSL) / 80%);
    color: var(--white);
    flex: 2;
    inline-size: 100%;
    max-block-size: 100vh;
    overflow: hidden;

    display: grid;
    place-content: center;
	}

	.backdrop {
		background-color: hsl(var(--brandHSL) / 1%);
		backdrop-filter: blur(5px);
	}

	::selection {
	  background-color: hsl(var(--brandHSL) / 10%);
	}

	@media (max-width: 960px) {
		main {
			min-height: 100vh;
		  grid: [stack] 1fr [sidebar] auto / [stack] 1fr;
		  background-position: 0 calc(100vh - 19ch);
		}

		main > section {
			background: var(--brand);
		}
	}
</style>