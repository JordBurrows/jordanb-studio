const projects = [
  {
    title: 'Homeshine',
    image: 'assets/images/homeshine/homeshine logo.png',
    desc: 'Website build for a cleaning company. Design, layout, and code, live in production.',
    pieces: [
      { title: 'Homepage', category: 'ui', tag: 'Website UI', src: 'assets/images/homeshine/homeshine logo.png' },
      { title: 'Booking page', category: 'ui', tag: 'Website UI', src: 'assets/images/homeshine/homeshine logo.png' },
      { title: 'Mobile view', category: 'ui', tag: 'Website UI', src: 'assets/images/homeshine/homeshine logo.png' }
    ],
    pageUrl: 'projects/homeshine.html'
  },
  {
    title: 'Boundary Graphics — shopfront banner',
    image: '',
    desc: 'Large-format signage for a multi-business storefront — Boundary Graphics, Boundary Carcare, and Urban Ink. Concept, layout, and print production.',
    pieces: [
      { title: 'Full banner', category: 'media', tag: 'Media / artwork / print', src: '' },
      { title: 'Boundary Graphics logo', category: 'brand', tag: 'Brand outlet', src: '' },
      { title: 'Boundary Carcare logo', category: 'brand', tag: 'Brand outlet', src: '' },
      { title: 'Urban Ink logo', category: 'brand', tag: 'Brand outlet', src: '' },
      { title: 'Banner installed', category: 'media', tag: 'Media / artwork / print', src: '' }
    ],
    pageUrl: 'projects/boundary-graphics.html'
  },
  {
    title: '66 American Steakhouse',
    image: 'assets/images/66/66.logo.png',
    desc: 'Full visual identity for an independent restaurant — logo, menu design, signage system.',
    pieces: [
      { title: 'Logo', category: 'logos', tag: 'Logo', src: 'assets/images/66/66.logo.png' },
      { title: 'Social media', category: 'media', tag: 'Media / artwork / print', src: 'assets/images/66/66 Social Media.png' },
      { title: 'Logo concept', category: 'brand', tag: 'Brand outlet', src: 'assets/images/66/66 Logo Concept.png' }
    ],
    pageUrl: 'projects/steakhouse.html'
  },
{
    title: 'Kalaadi King',
    image: 'assets/images/kalaadi king/Kalaadi King logo.png',
    desc: 'Full visual identity for an independent restaurant — logo, menu design, signage system.',
    pieces: [
      { title: 'Logo', category: 'logos', tag: 'Logo', src: 'assets/images/kalaadi king/Kalaadi King logo.png' },
      { title: 'Menu design', category: 'media', tag: 'Media / artwork / print', src: 'assets/images/kalaadi king/Kalaadi King menu.png' },
      { title: 'Grand Opening', category: 'nothing', tag: 'Grand Opening', src: 'assets/images/kalaadi king/Kalaadi King grand opening.png' }
    ],
    pageUrl: ''
},
  {
    title: 'GOTO',
    image: 'assets/images/Goto/goto logo.png',
    desc: 'Seasonal marketing artwork and print collateral for a hospitality venue, balancing elegance, atmosphere, and readability.',
    pieces: [
      { title: 'GOTO logo', category: 'logos', tag: 'Logo', src: 'assets/images/Goto/goto logo.png' },
      { title: 'Signage', category: 'media', tag: 'Media / artwork / print', src: 'assets/images/Goto/Goto Signage.jpg' },
      { title: 'Social media', category: 'media', tag: 'Media / artwork / print', src: 'assets/images/Goto/Goto Social Media.jpg' },
      { title: 'Business cards', category: 'brand', tag: 'Brand outlet', src: 'assets/images/Goto/Goto Business Cards.jpg' },
      { title: 'Brand guide', category: 'brand', tag: 'Brand outlet', src: 'assets/images/Goto/Goto Brand Guide.jpg' }
    ],
    pageUrl: ''
  },
  {
    title: 'Filson Roofing',
    image: 'assets/images/filson roofing/filson roofing logo.png',
    desc: 'A clean, confident roofing brand identity built to feel trustworthy, established, and professional from the first impression.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: 'assets/images/filson roofing/filson roofing logo.png' },
      { title: 'Brand lockup', category: 'logos', tag: 'Logo', src: 'assets/images/filson roofing/filson roofing logo.png' }
    ],
    pageUrl: ''
  },
  {
    title: 'Power',
    image: 'assets/images/power/power logo.png',
    desc: 'A strong and modern retail logo with a sharper identity aimed at clarity, scale, and confidence across signage and packaging.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: 'assets/images/power/power logo.png' },
    ],
    pageUrl: ''
  },
  {
    title: 'Carp Gear',
    image: 'assets/images/carp gear/carp gear logo.png',
    desc: 'A rugged logo direction for a trade and outdoor brand, balancing function, craft, and a memorable mark.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: 'assets/images/carp gear/carp gear logo.png' },
    ],
    pageUrl: ''
  },
  {
    title: 'LJT',
    image: 'assets/images/ljt/LJT logo.png',
    desc: 'A polished corporate logo identity built for clarity, professionalism, and strong brand recognition across print and digital.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: 'assets/images/ljt/LJT logo.png' },
    ],
    pageUrl: ''
  },
  {
    title: 'Wellies & Paws',
    image: 'assets/images/wellies & paws/wellies & paws logo.png',
    desc: 'A bold logo package for a fabrication company, combining technical precision with a stronger modern brand character.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: 'assets/images/wellies & paws/wellies & paws logo.png' },
    ],
    pageUrl: ''
  },
  {
    title: 'Svendborg Centaurs',
    image: 'assets/images/svendborg/svendborg centaurs logo.png',
    desc: 'Modern logo direction for a sports club, combining competitive energy with a clean, memorable identity.',
    pieces: [
      { title: 'Primary logo', category: 'logos', tag: 'Logo', src: '' },
      { title: 'Club kit', category: 'brand', tag: 'Brand outlet', src: '' }
    ],
    pageUrl: ''
  }
];

function initWorkPage() {
  const grid = document.getElementById('gallery-grid');
  const filterSelect = document.getElementById('category-filter');
  const overlay = document.getElementById('project-detail-overlay');
  const closeButton = document.getElementById('project-detail-close');
  const detailTitle = document.getElementById('project-detail-title');
  const detailDesc = document.getElementById('project-detail-desc');
  const detailGallery = document.getElementById('project-detail-gallery');
  const detailLink = document.getElementById('project-detail-link');

  const lightbox = document.createElement('div');
  lightbox.className = 'project-lightbox-overlay';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="project-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="project-lightbox-title">
      <button type="button" class="project-lightbox-close" aria-label="Close enlarged image">×</button>
      <img id="project-lightbox-image" src="" alt="" />
      <div id="project-lightbox-title" class="project-lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('#project-lightbox-image');
  const lightboxTitle = lightbox.querySelector('#project-lightbox-title');
  const lightboxClose = lightbox.querySelector('.project-lightbox-close');

  if (!grid || !filterSelect || !overlay || !closeButton || !detailTitle || !detailDesc || !detailGallery || !detailLink) {
    return;
  }

  function normaliseCategory(value) {
    const normalised = String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, '');

    if (normalised === 'brandoutlets') return 'brand';
    if (normalised === 'artwork' || normalised === 'mediaartworkprint') return 'media';
    return normalised;
  }

  function getProjectPieces(project) {
    if (!Array.isArray(project.pieces)) return [];
    return project.pieces.map((piece) => ({
      title: piece.title || 'Project detail',
      category: normaliseCategory(piece.category || 'media'),
      tag: piece.tag || 'Project',
      src: piece.src || '',
      placeholder: !piece.src
    }));
  }

  function getProjectDefaultCard(project) {
    const firstPiece = getProjectPieces(project)[0];
    return {
      title: project.title,
      category: firstPiece ? firstPiece.category : 'media',
      tag: firstPiece ? firstPiece.tag : 'Project',
      src: project.image || (firstPiece ? firstPiece.src : ''),
      placeholder: !(project.image || (firstPiece && firstPiece.src))
    };
  }

  function matchesCategory(category, selectedFilter) {
    if (selectedFilter === 'all') return true;
    return normaliseCategory(category) === normaliseCategory(selectedFilter);
  }

  function renderGallery(project) {
    const items = getProjectPieces(project);

    if (items.length === 0) {
      detailGallery.innerHTML = '<div class="project-detail-gallery-item">No work to show yet.</div>';
      return;
    }

    detailGallery.innerHTML = items.map((item) => {
      if (item.placeholder || !item.src) {
        return `
          <article class="mini-project-card mini-project-placeholder" data-category="${item.category}">
            <div class="mini-project-image mini-project-image-empty"></div>
            <div class="mini-project-info">
              <h3>${item.title}</h3>
              <span>${item.tag} · image coming soon</span>
            </div>
          </article>
        `;
      }

      return `
        <article class="mini-project-card" data-category="${item.category}">
          <div class="mini-project-image">
            <img
              src="${encodeURI(item.src)}"
              alt="${item.title}"
              title="${item.title}"
              data-src="${encodeURI(item.src)}"
              onerror="this.onerror=null; this.parentElement.classList.add('image-broken'); this.style.display='none';"
            >
          </div>
          <div class="mini-project-info">
            <h3>${item.title}</h3>
            <span>${item.tag}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function openProject(project) {
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

  function openLightbox(src, title) {
    if (!src) return;

    lightboxImage.src = src;
    lightboxImage.alt = title || 'Project image';
    lightboxTitle.textContent = title || 'Project image';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    lightboxTitle.textContent = '';

    if (!overlay.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function renderGrid(selectedFilter = 'all') {
    grid.innerHTML = '';

    const projectsToRender = selectedFilter === 'all'
      ? projects.map((project) => ({ project, item: getProjectDefaultCard(project) }))
      : projects.flatMap((project) => {
          const matches = getProjectPieces(project).filter((piece) => matchesCategory(piece.category, selectedFilter));
          return matches.map((piece) => ({ project, item: piece }));
        });

    if (projectsToRender.length === 0) {
      grid.innerHTML = '<div class="project-detail-gallery-item">No work found in this category.</div>';
      return;
    }

    projectsToRender.forEach(({ project, item }) => {
      const card = document.createElement('article');
      const imageSource = item.src || project.image || '';
      const imageStyle = imageSource ? `style="background-image: url('${encodeURI(imageSource)}');"` : '';
      const cardTitle = project.title;
      const cardTag = item.tag || 'Project';

      card.className = 'card';
      card.dataset.category = item.category || 'media';
      card.innerHTML = `
        <div class="card-image">
          <div class="card-image-inner" ${imageStyle}></div>
        </div>
        <div class="card-info">
          <h2 class="card-title">${cardTitle}</h2>
          <span class="card-tag">${cardTag}</span>
        </div>
      `;

      card.addEventListener('click', () => {
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

  detailGallery.addEventListener('click', (event) => {
    const image = event.target.closest('img');

    if (!image || !image.dataset.src) {
      return;
    }

    event.stopPropagation();
    openLightbox(image.dataset.src, image.alt || image.title || 'Project image');
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (lightbox.classList.contains('open')) {
        closeLightbox();
        return;
      }
      closeProject();
    }
  });

  renderGrid();
}

document.addEventListener('DOMContentLoaded', initWorkPage);
