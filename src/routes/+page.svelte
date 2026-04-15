<script>
  import { onMount } from 'svelte';
  import HeroContent from '../lib/content/hero.md';

  let theme = $state('dark');
  let filters = $state([
    { label: '2026', selected: true },
    { label: '2025', selected: false },
    { label: '2024', selected: false }
  ]);

  const cards = [
    {
      title: 'FlatFade',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/2ffa059b-1ea6-4f38-ab50-059a574a9486'
    },
    {
      title: 'Unmasqued',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/e13e4f8f-83bd-49f5-abae-620015f420db'
    },
    {
      title: 'Meteo di Plastica',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/bafdb76c-896e-48c7-b9c1-3f777f7036d2'
    },
    {
      title: 'Plastify',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/dcb615df-9646-4efc-8046-941c3757013e'
    },
    {
      title: 'Substrata',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/4dda5257-ba67-4468-9ffa-0da87d66db23'
    },
    {
      title: 'Uzay',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/6c592b2e-afe3-44c6-b8f6-af6fa58f4740'
    },
    {
      title: 'RCRD_ME',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/782d8d59-c7b0-4516-8010-8897dc89e920'
    },
    {
      title: 'Sound Morphology',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/c446356d-33bf-44f5-b28b-8251bcaf65c4'
    },
    {
      title: 'Unverse',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/c5438c26-2c55-4060-b496-065180a06003'
    },
    {
      title: 'ArchiVe',
      year: '2026',
      image: 'https://www.figma.com/api/mcp/asset/b6253251-df8f-469c-a96f-2867efd9198f'
    }
  ];

  const arrowIcon = 'https://www.figma.com/api/mcp/asset/2197ab6c-c691-4404-a1d3-1ed82bdc4493';
  const politecnicoLogo = 'https://www.figma.com/api/mcp/asset/db6bf599-9760-4598-8e8c-ec62435cbfc4';

  /** @param {string} label */
  function selectFilter(label) {
    filters = filters.map((filter) => ({
      ...filter,
      selected: filter.label === label
    }));
  }

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  }

  function applyTheme() {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem('theme', theme);
    }
  }

  onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      theme = storedTheme;
    } else if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      theme = 'light';
    }

    applyTheme();
  });
</script>

<div class="page-shell">
  <header class="topbar">
    <div class="topbar-left">
      <p class="brand">W–D</p>
      <button type="button" class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
      </button>
    </div>

    <div class="topbar-right">
      <button type="button" class="topbar-link">About</button>
      <span class="topbar-handle">@webdesign_ddc</span>
    </div>
  </header>

  <main class="hero-section">
    <article class="hero-copy">
      <HeroContent />
    </article>
  </main>

  <section class="filters" aria-label="Year filters">
    {#each filters as filter}
      <button
        type="button"
        class="filter-pill"
        class:selected={filter.selected}
        onclick={() => selectFilter(filter.label)}
      >
        {filter.label}
      </button>
    {/each}
  </section>

  <section class="cards-grid" aria-label="Project cards">
    {#each cards as card}
      <article class="card">
        <div class="card-image">
          <img src={card.image} alt={card.title} loading="lazy" />
          <div class="card-action-icon" aria-hidden="true">
            <img src={arrowIcon} alt="" />
          </div>
          <div class="card-overlay"></div>
        </div>
        <div class="card-meta">
          <span class="card-title">{card.title}</span>
          <span class="card-year">/ {card.year}</span>
        </div>
      </article>
    {/each}
  </section>

  <footer class="page-footer">
    <img src={politecnicoLogo} alt="Politecnico di Milano" />
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    background: var(--color-background-primary);
    color: var(--color-content-primary);
    font-family: var(--font-primary, 'Satoshi'), sans-serif;
  }

  .page-shell {
    max-width: 1512px;
    margin: 0 auto;
    padding: 112px var(--spacing-11) 80px;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  .topbar-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .brand {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-content-primary);
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  .topbar-link,
  .topbar-handle,
  .theme-toggle {
    font-size: 24px;
    line-height: 1;
    white-space: nowrap;
  }

  .topbar-link,
  .theme-toggle {
    border: none;
    background: transparent;
    color: var(--color-link);
    cursor: pointer;
    font-weight: 500;
    padding: 0;
    transition: color 160ms ease, transform 160ms ease;
  }

  .topbar-link:hover,
  .theme-toggle:hover {
    color: var(--color-filters-selected);
    transform: translateY(-1px);
  }

  .topbar-handle {
    color: var(--color-content-primary);
    opacity: 0.92;
  }

  .hero-section {
    padding-top: 120px;
  }

  .hero-copy {
    margin: 0;
    max-width: 893px;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--color-content-primary);
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 72px;
  }

  .filter-pill {
    border: none;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: var(--radius-full);
    font-size: 24px;
    font-weight: 500;
    background: transparent;
    color: var(--color-filters-text-default);
    border: 1px solid transparent;
    transition: background 160ms ease, color 160ms ease, border 160ms ease, transform 160ms ease;
  }

  .filter-pill:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.12);
  }

  .filter-pill.selected {
    background: var(--color-filters-selected);
    color: var(--color-content-primary);
    box-shadow: 0 12px 24px rgba(211, 62, 67, 0.25);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 40px;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: hidden;
    background: var(--color-background-surface);
    border-radius: 18px;
    border: 1px solid var(--color-border);
    box-shadow: var(--color-card-shadow);
    transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  }

  .card:hover,
  .card:focus-visible {
    transform: translateY(-8px);
    box-shadow: var(--color-card-hover-shadow);
    border-color: rgba(211, 62, 67, 0.35);
  }

  .card-image {
    position: relative;
    width: 100%;
    aspect-ratio: 664 / 401;
    overflow: hidden;
    border-radius: 18px 18px 0 0;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform-origin: center;
    transition: transform 260ms ease;
  }

  .card:hover .card-image img,
  .card:focus-visible .card-image img {
    transform: scale(1.03);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: transparent;
    transition: background 260ms ease;
  }

  .card:hover .card-overlay,
  .card:focus-visible .card-overlay {
    background: var(--color-card-hover-overlay);
  }

  .card-action-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.28);
    border-radius: 999px;
    transition: transform 220ms ease, background 220ms ease;
  }

  .card:hover .card-action-icon,
  .card:focus-visible .card-action-icon {
    transform: scale(1.08);
    background: rgba(211, 62, 67, 0.9);
  }

  .card-action-icon img {
    width: 16px;
    height: 16px;
    display: block;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 24px;
    line-height: 1;
    padding: 0 16px 20px;
  }

  .card-title {
    font-weight: 500;
    color: var(--color-content-primary);
  }

  .card-year {
    color: var(--color-content-secondary);
  }

  .page-footer {
    padding: 40px 0 0;
    display: flex;
    justify-content: center;
  }

  .page-footer img {
    max-width: 201px;
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    .page-shell {
      padding: 96px 32px 64px;
    }

    .hero-copy {
      font-size: 32px;
      max-width: 100%;
    }

    .topbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .topbar-right {
      gap: 16px;
    }

    .cards-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .filter-pill,
    .topbar-link,
    .topbar-handle,
    .brand {
      font-size: 20px;
    }

    .hero-copy {
      font-size: 28px;
    }
  }
</style>
