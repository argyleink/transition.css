<header>
  <h1>
    <span>transition</span>
    <span>.</span>
    <span>css</span>
  </h1>
  <small>Just-add-water CSS clip-path transitions</small>
</header>

<style>
  h1 {
    font-size: min(15vmin, 7rem);
    font-weight: 100;
    display: flex;
    color: var(--white);
    margin: 0;
  }

  h1 > span:nth-child(2) {
    color: deeppink;
  }

  h1 > span:nth-child(3) {
    font-weight: bold;
    color: var(--brand-alt);
  }

  @media (max-width: 720px) {
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
  }

  @media (min-width: 720px) {
    header {
      padding-inline-start: 5ch;
      padding-block-start: 2ch;
    }
  }
</style>