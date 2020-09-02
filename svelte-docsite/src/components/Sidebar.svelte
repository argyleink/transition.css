<script>
  import transitions from '../transitions.js'
  import transitionsMap from '../transitions-map.js'
  import {transition, duration, easing} from '../store.js'
  import {GithubSVG} from '../icons.js'

  const easings = [
    'ease-in',
    'ease-out',
    'ease-in-out',
    'linear',
    'cubic-bezier(.25, 1, .30, 1)',
  ]

  function transitionClick(e) {
    const txn = e.currentTarget.textContent
    $transition = ''
		requestAnimationFrame(()=>
      $transition = txn)
    copyToClipboard($transition)
  }

  function copyToClipboard(text) {
    if (!navigator.clipboard) return

    try {
      navigator.clipboard.writeText(transitionsMap[text])
    } 
    catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
</script>

<nav>
  <div class="nav__transitions">
    <a class="getting-started" href="https://github.com/argyleink/transition.css#basics">Get Started ↗</a>

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
              <a href="#{txn}" on:click={transitionClick}>{txn}</a>
            </dd>
          {/each}
        {/each}
      </dl>
    {/each}
  </div>
  <div class="nav__footer">
    <div class="nav__footer__icon">
      <div class="icon-break">
        <a href="https://github.com/argyleink/transition.css">
          <svg viewbox="0 0 512 512">
            {@html GithubSVG}
          </svg>
        </a>
      </div>
    </div>
    <div class="nav__footer__links">
      <a href="https://github.com/argyleink/transition.css#custom">Documentation ↗</a>
      <a href="https://github.com/argyleink/transition.css/issues/new">Suggest a transition ↗</a>
      <a href="https://github.com/argyleink/transition.css">Contribute ↗</a>
    </div>
  </div>
</nav>

<style>
  a {
    color: var(--text);
  }

  a:hover {
    color: var(--brand);
  }

  svg {
    inline-size: 100%;
    max-block-size: 90vh;
    fill: var(--text);
  }

  nav {
    display: flex;
    box-sizing: border-box;
  }

  nav h3 {
    color: var(--brand);
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: lighter;
    text-decoration: underline;
    text-decoration-color: var(--brand-alt);
  }

  nav h3,
  nav h4 {
    margin: 0;
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
    cursor: pointer;
    position: relative;
    font-size: 1.3rem;
    font-weight: 300;
    white-space: nowrap;
    margin: 0;
  }

  dl > dd:hover::after,
  dl > dd:focus-within::after {
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' fill='deeppink' viewBox='0 0 24 24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/></svg>");
    position: absolute;
    left: -1.75ch;
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
    outline: 1px dotted var(--pink);
  }

  .fork-on-github {
    position: absolute;
    top: 0;
    right: 0;
  }

  .getting-started {
    margin-block-end: 3ch;
    font-weight: bold;
    letter-spacing: .1em;
  }

  .icon-break {
    margin-block: 3ch;
  }

  .icon-break svg {
    max-inline-size: 5ch;
  }

  @media (max-width: 1000px) {
    nav {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    nav {
      flex-direction: column;
      max-block-size: 100vh;
      overflow-y: hidden;
      background: var(--surface);
    }

    nav h3:not(:first-of-type) {
      margin-block-start: 2ch;
    }

    .nav__transitions {
      flex: 1;

      display: flex;
      flex-direction: column;
      gap: 1ch;

      padding: 3ch;
      overflow-y: auto;
      overscroll-behavior-y: none;
    }

    
    .nav__footer {
      flex: 0 0 auto;

      display: flex;

      border-top: 1px solid #fff6;
    }

    .nav__footer__icon,
    .nav__footer__links {
      padding: 1.5ch;
    }

    .nav__footer__links {
      display: flex;
      flex-direction: column;
      gap: 1ch;
    }
  }

  @media (prefers-color-scheme: light) {
    nav {
      --pink: deeppink;
    }
  }
</style>