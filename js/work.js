const projects = [
  {
    title: 'Homeshine',
    tag: 'Website UI',
    category: 'ui',
    wide: false,
    image: '[ Website Concept ]',
    desc: 'Website build for a cleaning company. Design, layout, and code, live in production.',
    gallery: ['Homepage', 'Booking page', 'Mobile view'],
    pageUrl: 'projects/homeshine.html'
  },
  {
    title: 'Boundary Graphics — shopfront banner',
    tag: 'Media / Artwork / Print',
    category: 'media',
    wide: true,
    image: '[ Print & Banner ]',
    desc: 'Large-format signage for a multi-business storefront — Boundary Graphics, Boundary Carcare, and Urban Ink. Concept, layout, and print production.',
    gallery: ['Full banner', 'Boundary Graphics logo', 'Boundary Carcare logo', 'Urban Ink logo', 'Banner installed'],
    pageUrl: 'projects/boundary-graphics.html'
  },
  {
    title: '66 American Steakhouse',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '[ Restaurant Identity ]',
    desc: 'Full visual identity for an independent restaurant — logo, menu design, signage system.',
    gallery: ['Logo', 'Menu design', 'Signage'],
    pageUrl: 'projects/steakhouse.html'
  },
  {
    title: 'Northline Realty',
    tag: 'Website UI',
    category: 'ui',
    wide: false,
    image: '[ Property Website ]',
    desc: 'A clean property marketing website focused on trust, availability, and easy browsing for a real estate brand.',
    gallery: ['Landing page', 'Property listings', 'Agent profile'],
    pageUrl: ''
  },
  {
    title: 'Aster & Oak',
    tag: 'Brand Outlets',
    category: 'brand',
    wide: false,
    image: '[ Brand System ]',
    desc: 'Identity design for a boutique interior studio, including launch collateral, packaging direction, and brand guidelines.',
    gallery: ['Logo suite', 'Packaging', 'Business cards'],
    pageUrl: ''
  },
  {
    title: 'Vector Forge',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '[ Logo Exploration ]',
    desc: 'A bold logo package for a fabrication company, combining technical precision with a stronger modern brand character.',
    gallery: ['Wordmark', 'Monogram', 'Vehicle decal'],
    pageUrl: ''
  },
  {
    title: 'Harbor House',
    tag: 'Media / Artwork / Print',
    category: 'media',
    wide: false,
    image: '[ Campaign Art ]',
    desc: 'Seasonal marketing artwork and print collateral for a hospitality venue, balancing elegance, atmosphere, and readability.',
    gallery: ['Poster set', 'Menu cover', 'Window clings'],
    pageUrl: ''
  },
  {
    title: 'Breeze + Co.',
    tag: 'Website UI',
    category: 'ui',
    wide: false,
    image: '[ Shopfront UI ]',
    desc: 'A lifestyle brand storefront concept designed to feel light, premium, and easy to browse across devices.',
    gallery: ['Homepage', 'Collection page', 'Checkout flow'],
    pageUrl: ''
  },
  {
    title: 'Signal Nine',
    tag: 'Brand Outlets',
    category: 'brand',
    wide: false,
    image: '[ Launch Identity ]',
    desc: 'Brand rollout for a strategic consultancy, spanning presentation design, stationery, and digital touchpoints.',
    gallery: ['Brand deck', 'Stationery', 'Digital mockup'],
    pageUrl: ''
  }
];

function initWorkPage() {
  const grid = document.getElementById('gallery-grid');
  const filterSelect = document.getElementById('category-filter');
  const overlay = document.getElementById('work-modal-overlay');
  const modalTag = document.getElementById('work-modal-tag');
  const modalTitle = document.getElementById('work-modal-title');
  const modalDesc = document.getElementById('work-modal-desc');
  const modalGallery = document.getElementById('work-modal-gallery');
  const modalLink = document.getElementById('work-modal-link');
  const closeButton = document.getElementById('work-modal-close');

  if (!grid || !filterSelect || !overlay || !modalTag || !modalTitle || !modalDesc || !modalGallery || !modalLink || !closeButton) {
    return;
  }

  function renderGrid(filter = 'all') {
    grid.innerHTML = '';

    projects
      .filter((project) => filter === 'all' || project.category === filter)
      .forEach((project) => {
        const card = document.createElement('article');
        card.className = `card${project.wide ? ' card-wide' : ''}`;
        card.dataset.category = project.category;
        card.innerHTML = `
          <div class="card-image">${project.image}</div>
          <div class="card-info">
            <h2 class="card-title">${project.title}</h2>
            <span class="card-tag" data-category="${project.category}">#${project.category}</span>
          </div>
        `;

        card.addEventListener('click', (event) => {
          const tag = event.target.closest('.card-tag');

          if (tag) {
            event.stopPropagation();
            filterSelect.value = project.category;
            renderGrid(project.category);
            return;
          }

          openWorkModal(project);
        });

        grid.appendChild(card);
      });
  }

  function openWorkModal(project) {
    modalTag.textContent = project.tag;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalGallery.innerHTML = project.gallery
      .map((label) => `<div class="work-modal-ph">${label}</div>`)
      .join('');

    modalLink.innerHTML = project.pageUrl
      ? `<a href="${project.pageUrl}" class="work-modal-link">See full project →</a>`
      : '';

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeWorkModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  filterSelect.addEventListener('change', (event) => {
    renderGrid(event.target.value);
  });

  closeButton.addEventListener('click', closeWorkModal);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeWorkModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeWorkModal();
    }
  });

  renderGrid();
}

document.addEventListener('DOMContentLoaded', initWorkPage);