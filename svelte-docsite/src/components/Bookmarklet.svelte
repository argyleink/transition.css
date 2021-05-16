<script>
  import {toast} from '../store.js'

  export let toastPosition

  const bookmarkletUrl = `javascript: (() => {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.href = "https://unpkg.com/transition-style";
    document.head.append(a);
  })();`.replaceAll('var ', 'var%20').replace(/\s/g, '')

  export const transitionClickBookmarklet = (e) => {
    const txn = e.currentTarget
    $toast.showing = false
    toastPosition = 'fixed'

    requestAnimationFrame(() => {
      if (navigator.clipboard) {
        copyToClipboard(bookmarkletUrl)

        $toast.showing = true
        $toast.x = txn.getBoundingClientRect().left - 25
        $toast.y = txn.getBoundingClientRect().top - 35
        $toast.message = 'URL copied'
      }
    })
  }

  async function copyToClipboard(text) {
    try {
      return navigator.clipboard.writeText(text)
    } 
    catch (err) {
      return Promise.reject(err)
    }
  }
</script>

<div class="bookmarklet">
  <a
    href={bookmarkletUrl} 
    title="Click to copy bookmarklet URL!" 
    on:click={transitionClickBookmarklet}>
    Bookmarklet
  </a>
</div>

<style>
  a {
    position: relative;
    color: var(--text);
  }

  a:hover {
    color: var(--high-contrast);
  }

  a:hover::after,
  a:focus-within::after {
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' fill='deeppink' viewBox='0 0 24 24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/></svg>");
    position: absolute;
    right: -1.75ch;
    block-size: 1.25ch;
    inline-size: 1.25ch;
  }
</style>