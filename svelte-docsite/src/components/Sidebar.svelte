<script>
  import transitions from '../transitions.js'
  import {transition, duration, easing} from '../store.js'

  const easings = [
    'cubic-bezier(.25, 1, .30, 1)',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'linear',
  ]

  function transitionClick(e) {
    $transition = e.currentTarget.textContent
    copyToClipboard($transition)
  }

  function copyToClipboard(text) {
    if (!navigator.clipboard) return

    try {
      navigator.clipboard.writeText(text)
    } 
    catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
</script>

<nav>
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

  <h3>Settings</h3>
  <h4>Duration:</h4>
  <select bind:value={$duration}>
    {#each [0.5,0.75,1,2,3,4,5,6,7,10] as time}
      <option selected={time === duration} value={time}>{time}s</option>  
    {/each}
  </select>

  <h4>Easing:</h4>
  <select bind:value={$easing}>
    {#each easings as ez}
      <option selected={ez === duration} value={ez}>{ez}</option>  
    {/each}
  </select>

  {#each Object.entries(transitions) as [title, groupedByShape]}
    <h3>{title}</h3>
    <dl>
      {#each Object.entries(groupedByShape) as [direction, groupedByDirection]}
        <dt>{direction}</dt>
        {#each groupedByDirection as txn}
          <dd selected={txn === transition}>
            <a href="#{txn}" on:click={transitionClick}>{txn}</a>
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

  nav {
    background: var(--surface);
    display: flex;
    gap: 1ch;
    padding: 3ch;
    box-sizing: border-box;
  }

  nav > h3 {
    color: var(--brand);
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: lighter;
    text-decoration: underline;
    text-decoration-color: var(--white);
  }

  nav > h3,
  nav > h4 {
    margin: 0;
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

  dd[selected="true"] > a {
    text-decoration: underline;
    text-decoration-color: deeppink;
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



  @media (max-width: 720px) {
    nav {
      background: var(--brand);
      inline-size: 100%;
      place-content: center;
    }

    nav > *:not(.mobile-only) {
      display: none;
    }

    nav > select {
      font-size: 1.25rem;
      border: none;
      background: var(--white);
    }
  }

  @media (min-width: 720px) {
    nav {
      flex-direction: column;
      max-block-size: 100vh;
      overflow-y: auto;
    }

    nav > .mobile-only {
      display: none;
    }

    nav > h3:not(:first-of-type) {
      margin-block-start: 2ch;
    }
  }

  @media (prefers-color-scheme: light) {
    nav {
      text-decoration-color: hsl(208 55% 75%);
    }
  }
</style>