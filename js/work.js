const projects = [
  {
    title: 'Homeshine',
    tag: 'Website UI',
    category: 'ui',
    wide: false,
    image: '<div class="card-image-inner card-image-homeshine"></div>',
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
    image: '<div class="card-image-inner card-image-66-logo"></div>',
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
    title: 'Wellies & Paws',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-wellies-paws"></div>',
    desc: 'A bold logo package for a fabrication company, combining technical precision with a stronger modern brand character.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'Carp Gear',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-carp-gear-logo"></div>',
    desc: 'A bold logo direction for a carp gear brand, balancing strength, clarity, and a memorable visual identity.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'Power',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-power-logo"></div>',
    desc: 'A clean and confident logo concept with a strong modern presence and a sharp, enduring feel.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'Lynch Roofing',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-lynch-roofing-logo"></div>',
    desc: 'Roofing brand identity for a local trades business, balancing trust, durability, and a clean modern presentation.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'Svendborg Centaurs',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-svendborg-centaurs-logo"></div>',
    desc: 'Modern logo direction for a sports club, combining competitive energy with a clean, memorable identity.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'LJT',
    tag: 'Logos',
    category: 'logos',
    wide: false,
    image: '<div class="card-image-inner card-image-ljt-logo"></div>',
    desc: 'A sharp and precise logo direction for a professional identity, focused on clarity, confidence, and modern brand presence.',
    gallery: [],
    pageUrl: ''
  },
  {
    title: 'GOTO',
    tag: 'Media / Artwork / Print',
    category: 'media',
    wide: false,
    image: '<div class="card-image-inner card-image-GOTO"></div>',
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
  const overlay = document.getElementById('project-detail-overlay');
  const closeButton = document.getElementById('project-detail-close');
  const detailTag = document.getElementById('project-detail-tag');
  const detailTitle = document.getElementById('project-detail-title');
  const detailDesc = document.getElementById('project-detail-desc');
  const detailGallery = document.getElementById('project-detail-gallery');
  const detailLink = document.getElementById('project-detail-link');

  if (!grid || !overlay || !closeButton || !detailTag || !detailTitle || !detailDesc || !detailGallery || !detailLink) {
    return;
  }

  function openProjectDetail(project) {
    detailTag.textContent = project.tag;
    detailTitle.textContent = project.title;
    detailDesc.textContent = project.desc;

    const galleryItems = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery.map((item) => `<div class="project-detail-gallery-item">${item}</div>`).join('')
      : '<div class="project-detail-gallery-item">More work coming soon</div>';

    detailGallery.innerHTML = galleryItems;
    detailLink.innerHTML = project.pageUrl
      ? `<a href="${project.pageUrl}" class="project-detail-link">View project →</a>`
      : '';

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeProjectDetail() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function renderGrid() {
    grid.innerHTML = '';

    projects.forEach((project) => {
      const card = document.createElement('article');
      card.className = `card${project.wide ? ' card-wide' : ''}`;
      card.dataset.category = project.category;
      card.innerHTML = `
        <div class="card-image">${project.image}</div>
        <div class="card-info">
          <h2 class="card-title">${project.title}</h2>
          <span class="card-tag">${project.tag}</span>
        </div>
      `;

      card.addEventListener('click', () => openProjectDetail(project));
      grid.appendChild(card);
    });
  }

  closeButton.addEventListener('click', closeProjectDetail);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeProjectDetail();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProjectDetail();
    }
  });

  renderGrid();
}

document.addEventListener('DOMContentLoaded', initWorkPage);