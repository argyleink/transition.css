<script>
  import transitions from '../transitions.js'

  export let selected = 'in:custom:circle-swoop'

  function transitionClick(e) {
    selected = e.currentTarget.textContent
  }
</script>

<nav>
  <select bind:value={selected}>
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
          <dd selected={transition === selected}>
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

  @media (max-width: 720px) {
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
</style>