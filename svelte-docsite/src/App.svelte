<script>
	import transitions from './transitions.js'
	export let transition = 'in:custom:circle-swoop'

	if (location.hash !== '')
		transition = location.hash.slice(1)

	function transitionClick(e) {
		transition = e.currentTarget.textContent
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/transition-style">

	<meta name="theme-color" content="#498aeb">
  <meta name="description" content="just add water clip-path mask transitions">
</svelte:head>

<section transition="{transition}">
  <header>
    <h1>
      <span>transition</span>
      <span>.</span>
      <span>css</span>
    </h1>
    <small>Just-add-water CSS clip-path transitions</small>
  </header>
</section>

<nav>
	<select bind:value={transition}>
		{#each Object.entries(transitions) as [title, groupedByShape]}
			{#each Object.entries(groupedByShape) as [direction, groupedByDirection]}
				<optgroup label="{title} {direction}">
				{#each groupedByDirection as transition}
					<option>{transition}</option>
				{/each}
				</optgroup>
			{/each}
		{/each}
	</select>

	{#each Object.entries(transitions) as [title, groupedByShape]}
		<h3>{title}</h3>
		<dl>
			{#each Object.entries(groupedByShape) as [direction, groupedByDirection]}
				<dt>{direction}</dt>
				{#each groupedByDirection as transition}
					<dd>
						<a href="#{transition}" on:click={transitionClick}>{transition}</a>
					</dd>
				{/each}
			{/each}
		</dl>
	{/each}

	<hr>
  <a href="https://github.com/argyleink/transition.css#custom">Customize ↗</a>
  <a href="https://github.com/argyleink/transition.css/issues/new">Suggest a transition ↗</a>
  <a href="https://github.com/argyleink/transition.css">Contribute ↗</a>
</nav>

<style>
	:root {
	  --surface: hsl(0 0% 6%);
	  --text: hsl(0 0% 78%);
	  --white: hsl(205 100% 94%);
	  --brand: hsl(208 46% 55%);
	  --brand-alt: hsl(205 100% 94%);
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
	  background-position: bottom left, bottom left, bottom left;
	  background-repeat: no-repeat, no-repeat, no-repeat;
	  background-image: 
	    url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='deeppink' fill-opacity='.2' d='M0,96L34.3,112C68.6,128,137,160,206,160C274.3,160,343,128,411,138.7C480,149,549,203,617,234.7C685.7,267,754,277,823,282.7C891.4,288,960,288,1029,282.7C1097.1,277,1166,267,1234,234.7C1302.9,203,1371,149,1406,122.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path></svg>"),
	    url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='deeppink' fill-opacity='.2' d='M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,154.7C480,149,549,107,617,122.7C685.7,139,754,213,823,224C891.4,235,960,181,1029,181.3C1097.1,181,1166,235,1234,245.3C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path></svg>"),
	    url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='deeppink' fill-opacity='.2' d='M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,74.7C480,53,549,43,617,69.3C685.7,96,754,160,823,176C891.4,192,960,160,1029,128C1097.1,96,1166,64,1234,85.3C1302.9,107,1371,181,1406,218.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path></svg>")
	  ;
	  color: var(--text);
	  font-family: system-ui;
	  min-block-size: 100vh;
	  display: flex;
	  justify-content: space-between;
	  padding: 0;
	}

	:global(body) > section {
    background: var(--brand);
    color: var(--white);
    flex: 2;
    inline-size: 100%;
    max-block-size: 100vh;
    overflow: hidden;

    display: grid;
    place-content: center;
	}

	:global(body),p,ul,figure,
	h1,h2,h3,h4,h5,h6,small {
	  margin: 0;
	}

	::selection {
	  background-color: var(--brand);
	}

	a {
	  color: var(--text);
	}

	a:hover {
	  color: var(--brand);
	}

	hr {
	  inline-size: 100%;
	  block-size: 1px;
	  border-color: var(--surface);
	  border-style: solid;
	  margin-block-end: 2ch;
	}

	svg {
	  inline-size: 100%;
	  max-block-size: 90vh;
	  fill: var(--white);
	}

	h1 {
	  font-size: min(15vmin, 7rem);
	  font-weight: 100;
	  display: flex;
	  color: var(--white);
	}

	h1 > span:nth-child(2) {
		color: deeppink;
	}

	h1 > span:nth-child(3) {
		font-weight: bold;
		color: var(--brand-alt);
	}

	@media (max-width: 720px) {
		:global(body) {
		  flex-direction: column;
		}

		h1 {
		  justify-content: center;
		}

		header {
			text-align: center;
		}

		header > small {
			font-size: 1.25rem;
			font-weight: 300;
			color: var(--brand-alt);
		}

		nav {
			background: var(--brand);
	    inline-size: 100%;
	    place-content: center;
		}

		nav > *:not(select) {
			display: none;
		}

		nav > select {
			font-size: 1.25rem;
			border: none;
			background: var(--white);
		}
	}

	@media (min-width: 720px) {
	  header {
	  	padding-inline-start: 5ch;
	  	padding-block-start: 2ch;
	  }

	  nav {
	  	flex-direction: column;
	    max-block-size: 100vh;
	    overflow-y: auto;
	  }

	  nav > select {
	  	display: none;
	  }

	  nav > h3:not(:first-of-type) {
      margin-block-start: 2ch;
    }
	}

	nav {
	  background: var(--surface);
	  display: flex;
	  gap: 1ch;
	  padding: 3ch;
	  box-sizing: border-box;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--surface: hsl(0 0% 100%);
			--text: hsl(0 0% 27%);
			--white: hsl(0 0% 100%);
			--brand: hsl(216 80% 60%);
		}

		nav {
		  text-decoration-color: hsl(208 55% 75%);
		}
	}

	nav > h3 {
	  color: var(--brand);
	  font-size: 2.5rem;
	  font-weight: lighter;
	  text-decoration: underline;
	  text-decoration-color: var(--white);
	}

	dl {
	  margin: 0;
	  padding: 0;
	  display: grid;
	  gap: 1ex;
	}

	dl > dt {
    color: deeppink;
    font-weight: bold;
    text-transform: uppercase;
  }

  dl > dt:not(:first-of-type) {
  	margin-block-start: 2ch;
  }

  [selected] > a {
    text-decoration-color: deeppink;
  }

  :not([selected]) > a {
    text-decoration: none;
  }

  dl > dd {
    cursor: pointer;
    position: relative;
    font-size: 1.3rem;
    font-weight: 300;
    white-space: nowrap;
    margin: 0;
  }

  dl > dd:is(:hover,:focus-within)::after {
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' fill='deeppink' viewBox='0 0 24 24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/></svg>");
    position: absolute;
    inset: 0 0 0 -1.75ch;
    block-size: .75em;
    inline-size: .75em;
  }

  dl > dd > a {
    padding-block: .5ex;
  }

  dl > dd > a:hover {
    color: var(--brand);
  }

  dl > dd > a:focus {
    outline: 1px dotted deeppink;
  }
</style>