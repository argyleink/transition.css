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
		active_transition = ''
		requestAnimationFrame(()=>
			active_transition = last_chosen)
	}
</script>

<main>

	<section class="backdrop" on:click={demoClick}>
		<Logo backdrop=true/>
	</section>

	<section 
		transition-style="{active_transition}" 
		on:click={demoClick}
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
	  --surface: hsl(208 50% 10%);
		--surfaceHSL: 0 0% 6%;
	  --text: hsl(208 25% 78%);
	  --white: hsl(205 100% 94%);
	  --brand: hsl(208 46% 52%);
		--brandHSL: 208 46% 52%;
	  --brand-alt: hsl(205 100% 20%);
		--pink: hsl(328 60% 58%);

		--layer-surface: 1;
		--layer-tooltip: 2;
		--layer-sticky: 3;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--surface: hsl(216 80% 100%);
			--surfaceHSL: 0 0% 100%;
			--text: hsl(208 25% 35%);
			--white: hsl(0 0% 100%);
			--brand: hsl(216 60% 54%);
			--brandHSL: 216 60% 54%;
			--brand-alt: hsl(205 100% 86%);
			--pink: deeppink;
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

	[transition-style="in:custom:circle-swoop"] {
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
    background-color: hsl(var(--brandHSL));
    color: var(--white);
    flex: 2;
    inline-size: 100%;
    max-block-size: 100vh;
    overflow: hidden;

    display: grid;
    place-content: center;
	}

	.backdrop {
		background-color: unset;
	}

	:global(::selection) {
	  background-color: hsl(328 60% 58% / 40%);
	}

	@media (max-width: 1000px) {
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