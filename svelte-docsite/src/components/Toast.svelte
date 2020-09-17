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
    CSS copied!
  </span>
{/if}

<style>
  span {
    position: absolute;
    left: 5px;
    z-index: var(--layer-tooltip);
    background: var(--pink);
    color: hsl(328 100% 98%);
    box-shadow: 0 5px 10px hsl(328 50% 30% / 50%);
    padding: .5ch 1ex;
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
</style>