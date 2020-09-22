<script>
  import {fade,scale} from 'svelte/transition'
  import {elasticOut} from 'svelte/easing'
  import {writable} from 'svelte/store'
  import {toast} from '../store.js'

  const LINGER_TIME = 2e3
  let temp_timeout

  const introstart = (node, params) =>
    clearTimeout(temp_timeout)

  const introend = (node, params) =>
    temp_timeout = setTimeout(() =>
      $toast.showing = false
    , LINGER_TIME)
</script>

{#if $toast.showing}
  <span 
    in:scale="{{ 
      duration: 1e3, 
      easing: elasticOut,
      start: .9,
      opacity: 1,
    }}" 
    out:fade 
    on:introstart={introstart}
    on:introend={introend}
    style="
      top: {$toast.y}px;
      left: {$toast.x + 16}px;
    "
  >
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
    CSS copied
  </span>
{/if}

<style>
  span {
    position: absolute;
    left: 5px;
    z-index: var(--layer-tooltip);

    display: flex;
    place-items: center;
    gap: .5ch;
    background: var(--pink);
    color: var(--white);
    box-shadow: 0 5px 10px hsl(328 50% 30% / 50%);
    text-shadow: 0 1px 0 hsl(328 50% 30%);
    padding: .5ch 1ch;
    border-radius: .5ex;
  }

  span::after {
    content: '';
    inline-size: 16px;
    block-size: 5px;
    position: absolute;
    bottom: -4px;
    left: calc(50% - 8px);
    background-color: var(--pink);
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }

  svg {
    block-size: 2ch;
    filter: drop-shadow(0 1px 0 hsl(328 50% 30%));
  }
</style>