<script>
  import {fade,scale} from 'svelte/transition'
  import {elasticOut} from 'svelte/easing'
  import {writable} from 'svelte/store'
  import {toast} from '../store.js'

  const LINGER_TIME = 1e3

  function toastFinished(node, params) {
    setTimeout(()=>{
      $toast.showing = false
    }, LINGER_TIME)
  }
</script>

{#if $toast.showing}
  <span 
    in:scale="{{ 
      duration: 2000, 
      easing: elasticOut,
      start: .9,
      opacity: 1,
    }}" 
    out:fade 
    on:introend={toastFinished}
    style="
      top: {$toast.y}px;
      left: {$toast.x}px;
    "
  >
    CSS copied!
  </span>
{/if}

<style>
  span {
    position: absolute;
    z-index: 1;
    background: var(--pink);
    color: var(--text);
    box-shadow: 0 5px 10px hsl(0 0% 0% / 50%);
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