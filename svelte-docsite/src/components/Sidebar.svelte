<script>
  import Toast from './Toast.svelte'
  import Bookmarklet from './Bookmarklet.svelte'
  import transitions from '../transitions.js'
  import transitionsMap from '../transitions-map.js'
  import {transition, duration, easing, toast} from '../store.js'
  import {GithubSVG, DocsSVG, SuggestSVG, ContributeSVG} from '../icons.js'
  
  const easings = [
    'ease-in',
    'ease-out',
    'ease-in-out',
    'linear',
    'cubic-bezier(.25, 1, .30, 1)',
  ]

  let toastPosition = 'fixed'

  function transitionClick(e) {
    const txn = e.currentTarget
    $transition = ''
    $toast.showing = false
    $toast.message = 'CSS copied'
    toastPosition = 'absolute'

		requestAnimationFrame(() => {
      $transition = txn.textContent

      if (navigator.clipboard) {
        copyToClipboard(txn.textContent)

        $toast.showing = true
        $toast.x = 0
        $toast.y = txn.parentElement.offsetTop - 35
      }
    })
  }

  async function copyToClipboard(text) {
    try {
      return navigator.clipboard.writeText(transitionsMap[text])
    } 
    catch (err) {
      return Promise.reject(err)
    }
  }
</script>

<select bind:value={$transition} class="mobile-only">
  {#each Object.entries(transitions) as [title, groupedByShape]}
    {#each Object.entries(groupedByShape) as [direction, groupedByDirection]}
      <optgroup label="{title} {direction}">
      {#each groupedByDirection as txn}
        <option>{txn}</option>
      {/each}
      </optgroup>
    {/each}
  {/each}
</select>

<nav>
  <a class="getting-started" href="https://github.com/argyleink/transition.css#basics">
    Get Started
  </a>

  <a class="fork-on-github" href="https://github.com/argyleink/transition.css">
    <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1">
  </a>

  <h3>Settings</h3>
  <h4>--transition__duration:</h4>
  <div>
    <select bind:value={$duration}>
      {#each [0.5,0.75,1,1.5,2,2.5,3,4,5,6,7,10] as time}
        <option value={time}>{time}s</option>  
      {/each}
    </select>
  </div>

  <h4>--transition__easing:</h4>
  <div>
    <select bind:value={$easing}>
      {#each easings as ez}
        <option value={ez}>{ez}</option>  
      {/each}
    </select>
  </div>

  {#each Object.entries(transitions) as [title, groupedByShape]}
    <h3>{title}</h3>
    <dl>
      {#each Object.entries(groupedByShape) as [direction, groupedByDirection]}
        <dt>{direction}</dt>
        {#each groupedByDirection as txn}
          <dd selected={txn === transition}>
            <a 
              href="#{txn}" 
              title="Click to copy CSS!"
              on:click={transitionClick} 
            >{txn}</a>
          </dd>
        {/each}
      {/each}
    </dl>
  {/each}

  <div class="icon-break">
    <a href="https://github.com/argyleink/transition.css">
      <svg viewbox="0 0 512 512">
        {@html GithubSVG}
      </svg>
    </a>
  </div>
  
  <div class="sticky-links">
    <a href="https://github.com/argyleink/transition.css#custom">
      Documentation
      <svg viewbox="0 0 20 20">
        {@html DocsSVG}
      </svg>
    </a>
    <a href="https://github.com/argyleink/transition.css/issues/new">
      Suggest a transition
      <svg viewbox="0 0 20 20">
        {@html SuggestSVG}
      </svg>
    </a>
    <a href="https://github.com/argyleink/transition.css">
      Contribute
      <svg viewbox="0 0 20 20">
        {@html ContributeSVG}
      </svg>
    </a>
    <Bookmarklet bind:toastPosition={toastPosition}></Bookmarklet>
  </div>

  <Toast position={toastPosition}/>
</nav>

<style>
  a {
    color: var(--text);
  }

  a:hover {
    color: var(--high-contrast);
  }

  svg {
    fill: var(--high-contrast);
  }

  nav {
    display: grid;
    gap: 1ch;
    padding: 3ch;
    padding-bottom: 0;
    padding-block-end: 0;
    box-sizing: border-box;
    position: relative;
  }

  nav > h3 {
    color: var(--brand);
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: lighter;
    text-decoration: underline;
    text-decoration-color: var(--brand-alt);
    text-decoration-style: wavy;
  }

  nav > h3,
  nav > h4 {
    margin: 0;
  }

  nav > h3 {
    margin-block-end: .25ch;
  }

  dl {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1ex;
  }

  dl > dt {
    color: var(--pink);
    font-weight: bold;
    text-transform: uppercase;
  }

  dl > dt:not(:first-of-type) {
    margin-block-start: 2ch;
  }

  dd[selected="true"] > a {
    text-decoration: underline;
    text-decoration-color: var(--pink);
  }

  dl > dd {
    position: relative;
    font-size: 1.3rem;
    font-weight: 300;
    white-space: nowrap;
    margin: 0;
  }

  dl a:hover::after,
  dl a:focus-within::after {
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' fill='deeppink' viewBox='0 0 24 24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/></svg>");
    position: absolute;
    left: -1.75ch;
    inset: 0 0 0 -1.75ch;
    block-size: 1.25ch;
    inline-size: 1.25ch;
  }

  dl > dd > a {
    padding-block: .5ex;
  }

  dl > dd > a:hover {
    color: var(--high-contrast);
  }

  dl > dd > a:focus {
    outline: 1px dotted var(--pink);
  }

  select {
    font-size: 1.25rem;
    margin: 0;
    grid-area: stack;
    align-self: end;
    z-index: var(--layer-sticky);
  }

  .fork-on-github {
    position: absolute;
    top: 0;
    right: 0;
    z-index: var(--layer-sticky);
  }

  .getting-started {
    margin-bottom: 3ch;
    margin-block-end: 3ch;
    font-weight: bold;
    letter-spacing: .1em;
  }

  .icon-break {
    margin-top: 3ch;
    margin-bottom: 3ch;
    margin-block: 3ch;
  }

  .icon-break svg {
    max-inline-size: 5ch;
  }

  .sticky-links {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5ch;
    padding: 2ch 3ch;
    padding-block: 2ch;
    margin-left: -3ch;
    margin-right: -3ch;
    margin-inline: -3ch;
    background-color: var(--surface);
    border-top: 1px solid var(--brand);
  }

  .sticky-links > a {
    display: flex;
    place-items: center;
    gap: 1ch;
  }

  .sticky-links > a > svg {
    block-size: 2ch;
  }

  @media (orientation: portrait) and (max-width: 1100px) {
    nav {
      inline-size: 100%;
      place-items: center;
      z-index: var(--layer-surface);
      padding-top: 3ch;
      padding-bottom: 3ch;
      padding-block: 3ch;
      font-size: 1.5rem;
    }

    nav > *:not(.mobile-only):not(.sticky-links):not(.icon-break) {
      display: none;
    }

    select {
      width: min(100%, 300px);
      grid-area: stack;
      align-self: end;
      z-index: var(--layer-sticky);
      justify-self: center;
      margin-bottom: 3ch;
      margin-block-end: 3ch;
    }

    .icon-break {
      margin-top: 0;
      margin-bottom: 1ch;
      margin-block: 0 1ch;
    }

    .icon-break svg {
      max-inline-size: 5ch;
    }

    .sticky-links {
      padding-block-end: 0;
      align-items: center;
      font-size: 1.25rem;
    }
  }

  @media (orientation: landscape), (min-width: 1000px) {
    nav {
      flex-direction: column;
      max-block-size: 100vh;
      overflow-y: auto;
      overscroll-behavior-y: none;
    }

    .mobile-only {
      display: none;
    }

    nav > h3:not(:first-of-type) {
      margin-top: 2ch;
      margin-block-start: 2ch;
    }

    .sticky-links {
      position: sticky;
      bottom: 0;
      z-index: var(--layer-sticky);
    }
  }

  @media (orientation: landscape) and (max-width: 1000px) {
    nav > h3:not(:first-of-type) {
      margin-top: 1ch;
      margin-block-start: 1ch;
    }

    dl > dd {
      font-size: 1.1rem;
    }

    .sticky-links {
      padding: 2ch;
      gap: 1ch;
    }
  }

  @media (prefers-color-scheme: light) {
    nav {
      --pink: deeppink;
    }
  }
</style>