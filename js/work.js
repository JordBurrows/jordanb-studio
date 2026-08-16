const projects = [
  {
    title: 'Homeshine',
    tag: 'Website UI',
    category: 'ui',
    image: '<div class="card-image-inner card-image-homeshine"></div>',
    desc: 'Website build for a cleaning company. Design, layout, and code, live in production.',
    gallery: [
      { title: 'Homepage', type: 'ui', src: 'assets/images/homeshine/homeshine logo.png', alt: 'Homeshine homepage' },
      { title: 'Booking page', type: 'ui', src: 'assets/images/homeshine/homeshine logo.png', alt: 'Homeshine booking page' },
      { title: 'Mobile view', type: 'ui', src: 'assets/images/homeshine/homeshine logo.png', alt: 'Homeshine mobile view' }
    ],
    pageUrl: 'projects/homeshine.html'
  },
  {
    title: 'Boundary Graphics — shopfront banner',
    tag: 'Media / Artwork / Print',
    category: 'media',
    image: '[ Print & Banner ]',
    desc: 'Large-format signage for a multi-business storefront — Boundary Graphics, Boundary Carcare, and Urban Ink. Concept, layout, and print production.',
    gallery: [
      { title: 'Full banner', type: 'artwork', src: '', alt: 'Full banner' },
      { title: 'Boundary Graphics logo', type: 'branding', src: '', alt: 'Boundary Graphics logo' },
      { title: 'Boundary Carcare logo', type: 'branding', src: '', alt: 'Boundary Carcare logo' },
      { title: 'Urban Ink logo', type: 'branding', src: '', alt: 'Urban Ink logo' },
      { title: 'Banner installed', type: 'artwork', src: '', alt: 'Banner installed' }
    ],
    pageUrl: 'projects/boundary-graphics.html'
  },
  {
    title: '66 American Steakhouse',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-66-logo"></div>',
    desc: 'Full visual identity for an independent restaurant — logo, menu design, signage system.',
    gallery: [
      { title: 'Logo', type: 'logos', src: '', alt: 'Logo' },
      { title: 'Menu design', type: 'branding', src: '', alt: 'Menu design' },
      { title: 'Signage', type: 'branding', src: '', alt: 'Signage' }
    ],
    pageUrl: 'projects/steakhouse.html'
  },
  {
    title: 'GOTO',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-GOTO-logo"></div>',
    desc: 'Seasonal marketing artwork and print collateral for a hospitality venue, balancing elegance, atmosphere, and readability.',
    gallery: [
      { title: 'GOTO logo', type: 'logos', src: 'assets/images/Goto/goto logo.png', alt: 'GOTO logo' },
      { title: 'Signage', type: 'artwork', src: 'assets/images/Goto/Goto Signage.jpg', alt: 'GOTO signage' },
      { title: 'Social media', type: 'artwork', src: 'assets/images/Goto/Goto Social Media.jpg', alt: 'GOTO social media' },
      { title: 'Business cards', type: 'branding', src: 'assets/images/Goto/Goto Business Cards.jpg', alt: 'GOTO business cards' },
      { title: 'Brand guide', type: 'branding', src: 'assets/images/Goto/Goto Brand Guide.jpg', alt: 'GOTO brand guide' }
    ],
    pageUrl: ''
  },
  {
    title: 'Filson Roofing',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-filson-roofing-logo"></div>',
    desc: 'A clean, confident roofing brand identity built to feel trustworthy, established, and professional from the first impression.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: 'assets/images/filson%20roofing/filson%20roofing%20logo.png', alt: 'Filson Roofing primary logo' },
      { title: 'Brand lockup', type: 'logos', src: 'assets/images/filson%20roofing/filson%20roofing%20logo.png', alt: 'Filson Roofing brand lockup' }
    ],
    pageUrl: ''
  },
  {
    title: 'Power',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-power-logo"></div>',
    desc: 'A strong and modern retail logo with a sharper identity aimed at clarity, scale, and confidence across signage and packaging.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: 'assets/images/power/power logo.png', alt: 'Power primary logo' },
      { title: 'Brand application', type: 'logos', src: 'assets/images/power/power logo.png', alt: 'Power brand application' }
    ],
    pageUrl: ''
  },
  {
    title: 'Carp Gear',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-carp-gear-logo"></div>',
    desc: 'A rugged logo direction for a trade and outdoor brand, balancing function, craft, and a memorable mark.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: 'assets/images/carp%20gear/carp%20gear%20logo.png', alt: 'Carp Gear primary logo' },
      { title: 'Secondary mark', type: 'logos', src: 'assets/images/carp%20gear/carp%20gear%20logo.png', alt: 'Carp Gear secondary mark' }
    ],
    pageUrl: ''
  },
  {
    title: 'LJT',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-ljt-logo"></div>',
    desc: 'A polished corporate logo identity built for clarity, professionalism, and strong brand recognition across print and digital.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: 'assets/images/ljt/LJT logo.png', alt: 'LJT primary logo' },
      { title: 'Wordmark', type: 'logos', src: 'assets/images/ljt/LJT logo.png', alt: 'LJT wordmark' }
    ],
    pageUrl: ''
  },
  {
    title: 'Wellies & Paws',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-wellies-paws"></div>',
    desc: 'A bold logo package for a fabrication company, combining technical precision with a stronger modern brand character.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: 'assets/images/wellies%20&%20paws/wellies%20&%20paws%20logo.png', alt: 'Wellies & Paws logo' },
      { title: 'Secondary lockup', type: 'logos', src: 'assets/images/wellies%20&%20paws/wellies%20&%20paws%20logo.png', alt: 'Wellies & Paws secondary lockup' }
    ],
    pageUrl: ''
  },
  {
    title: 'Svendborg Centaurs',
    tag: 'Logos',
    category: 'logos',
    image: '<div class="card-image-inner card-image-svendborg-centaurs-logo"></div>',
    desc: 'Modern logo direction for a sports club, combining competitive energy with a clean, memorable identity.',
    gallery: [
      { title: 'Primary logo', type: 'logos', src: '', alt: 'Primary logo' },
      { title: 'Wordmark', type: 'logos', src: '', alt: 'Wordmark' },
      { title: 'Club kit', type: 'branding', src: '', alt: 'Club kit' }
    ],
    pageUrl: ''
  }
];

function initWorkPage() {
  const grid = document.getElementById('gallery-grid');
  const filterSelect = document.getElementById('category-filter');
  const overlay = document.getElementById('project-detail-overlay');
  const closeButton = document.getElementById('project-detail-close');
  const detailTag = document.getElementById('project-detail-tag');
  const detailTitle = document.getElementById('project-detail-title');
  const detailDesc = document.getElementById('project-detail-desc');
  const detailGallery = document.getElementById('project-detail-gallery');
  const detailLink = document.getElementById('project-detail-link');

  if (!grid || !filterSelect || !overlay || !closeButton || !detailTag || !detailTitle || !detailDesc || !detailGallery || !detailLink) {
    return;
  }

  function normaliseItem(item, project) {
    if (typeof item === 'string') {
      return {
        title: item,
        type: project.category || 'image',
        src: '',
        alt: item,
        placeholder: true
      };
    }

    return {
      title: item.title || 'Project detail',
      type: item.type || project.category || 'image',
      src: item.src || '',
      alt: item.alt || item.title || project.title,
      placeholder: !item.src
    };
  }

  function getGallery(project) {
    if (!Array.isArray(project.gallery)) return [];
    return project.gallery.map((item) => normaliseItem(item, project));
  }

  function renderGallery(project) {
    const items = getGallery(project);

    if (items.length === 0) {
      detailGallery.innerHTML = '<div class="project-detail-gallery-item">No work to show yet.</div>';
      return;
    }

    detailGallery.innerHTML = items.map((item) => {
      if (item.placeholder || !item.src) {
        return `
          <article class="mini-project-card mini-project-placeholder">
            <div class="mini-project-image mini-project-image-empty"></div>
            <div class="mini-project-info">
              <h3>${item.title}</h3>
              <span>${item.type} · image coming soon</span>
            </div>
          </article>
        `;
      }

      return `
        <article class="mini-project-card" data-type="${item.type}">
          <div class="mini-project-image">
            <img
              src="${encodeURI(item.src)}"
              alt="${item.alt || item.title}"
              title="${item.alt || item.title}"
              onerror="this.onerror=null; this.parentElement.classList.add('image-broken'); this.style.display='none';"
            >
          </div>
          <div class="mini-project-info">
            <h3>${item.title}</h3>
            <span>${item.type}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function openProject(project) {
    detailTag.textContent = project.tag;
    detailTitle.textContent = project.title;
    detailDesc.textContent = project.desc;
    renderGallery(project);

    detailLink.innerHTML = project.pageUrl
      ? `<a href="${project.pageUrl}" class="project-detail-link">View project →</a>`
      : '';

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProject() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.dataset.activeProject = '';
    document.body.style.overflow = '';
  }

  function renderGrid(selectedFilter = 'all') {
    grid.innerHTML = '';

    const filteredProjects = selectedFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

    if (filteredProjects.length === 0) {
      grid.innerHTML = '<div class="project-detail-gallery-item">No work found in this category.</div>';
      return;
    }

    filteredProjects.forEach((project) => {
      const card = document.createElement('article');
      card.className = `card${project.wide ? ' card-wide' : ''}`;
      card.dataset.category = project.category;
      card.innerHTML = `
        <div class="card-image">${project.image}</div>
        <div class="card-info">
          <h2 class="card-title">${project.title}</h2>
          <span class="card-tag" data-category="${project.category}">${project.tag}</span>
        </div>
      `;

      card.addEventListener('click', (event) => {
        const tag = event.target.closest('.card-tag');

        if (tag) {
          event.stopPropagation();
          filterSelect.value = tag.dataset.category;
          renderGrid(tag.dataset.category);
          return;
        }

        openProject(project);
      });

      grid.appendChild(card);
    });
  }

  filterSelect.addEventListener('change', (event) => {
    renderGrid(event.target.value);
  });

  closeButton.addEventListener('click', closeProject);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeProject();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProject();
    }
  });

  renderGrid();
}

document.addEventListener('DOMContentLoaded', initWorkPage);
