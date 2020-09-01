<script>
  import {GithubSVG} from '../icons.js'

	export let backdrop = false
</script>

<header class={backdrop?'is-backdrop':''}>
  <h1>
    <span>transition</span>
    <span>.</span>
    <span>css</span>
    <span>
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path>
      </svg>
    </span>
  </h1>
  <p>
    <a class="github-link" href="https://github.com/argyleink/transition.css">
      <svg viewbox="0 0 512 512">
        {@html GithubSVG}
      </svg>
    </a>
    Drop-in CSS transitions
  </p>
</header>

<style>
  h1 {
    font-size: min(13vmin, 7rem);
    font-weight: 100;
    display: flex;
    color: var(--white);
    margin: 0;
  }

  h1 > span:nth-child(2),
  h1 > span:nth-child(3) {
    color: var(--brand-alt);
  }

  h1 > span:nth-child(3) {
    font-weight: bold;
  }

  h1 svg {
    margin-inline-start: .25ch;
    width: 1em;
    position: relative;
    top: .1ex;
  }

  .is-backdrop h1 {
    color: var(--pink);
  }

  .is-backdrop p,
  .is-backdrop h1 > span:nth-child(2),
  .is-backdrop h1 > span:nth-child(3) {
    color: white;
  }

  @media (prefers-color-scheme: light) {
    .is-backdrop h1,
    .is-backdrop svg {
      color: var(--text);
      fill: var(--text);
    }
    
    .is-backdrop p,
    .is-backdrop h1 > span:nth-child(2),
    .is-backdrop h1 > span:nth-child(3) {
      color: var(--pink);
    }
  }

  p {
    display: inline-flex;
    gap: 1ch;
    align-items: center;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--brand-alt);
  }

  .github-link {
    display: inline-flex;
  }

  .github-link > svg {
    inline-size: 3ch;
    fill: var(--white);
  }

  @media (min-width: 720px) {
    header {
      padding-block-start: 2ch;
    }
  }

  @media (max-width: 400px) {
    p {
      font-size: 6vmin;
    }
  }
</style>