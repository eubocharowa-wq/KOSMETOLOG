/**
 * Редактируйте контент страницы здесь — в объекте content.
 * Временные поля (цены, отзывы, кейсы) замените на финальные тексты и фото.
 * Для кейсов можно добавить imageAfter — второе фото в модальном окне.
 */
const content = {
  media: {
    hero: './images/anastasia-portrait.png',
    about: './images/anastasia-portrait.png'
  },
  states: [
    'Лицо выглядит уставшим, даже если вы выспались',
    'Кожа стала неровной по тону или текстуре',
    'Хочется свежести, но без резких изменений',
    'Тело просит внимания после стресса, родов или паузы в уходе',
    'Есть отёчность, сухость, ощущение тяжести',
    'Домашний уход есть, но непонятно, работает ли он',
    'Хочется выглядеть ухоженно, но без перегруза процедурами',
    'Нужно мягко вернуться к себе и своему телу'
  ],
  directions: [
    {
      title: 'Лицо',
      text: 'Очищение, восстановление, свежесть, работа с тоном, текстурой и качеством кожи.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
      meta: ['цена позже', 'длительность позже']
    },
    {
      title: 'Тело',
      text: 'Процедуры для ощущения лёгкости, более собранного силуэта и лучшего внешнего вида кожи тела.',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
      meta: ['после стресса', 'после паузы в уходе']
    },
    {
      title: 'Эстетика без перегруза',
      text: 'Аккуратные процедуры, которые помогают поддерживать ухоженный вид без ощущения, что с лицом «что-то сделали».',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80',
      meta: ['бережно', 'по запросу']
    },
    {
      title: 'Домашний уход',
      text: 'Разбор того, чем вы уже пользуетесь, и подбор понятной системы: что оставить, что убрать, что добавить.',
      image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=900&q=80',
      meta: ['система ухода', 'без лишнего']
    }
  ],
  principles: [
    ['01', 'Без случайных назначений', 'Процедура подбирается под состояние, а не потому что она сейчас популярна.'],
    ['02', 'Без перегруза', 'Если коже или телу нужен мягкий уход, не стоит делать агрессивные вмешательства.'],
    ['03', 'С понятным продолжением', 'После визита клиент понимает, что делать дома и когда приходить снова, если это действительно нужно.']
  ],
  steps: [
    ['01', 'Вы рассказываете, что хотите изменить', 'Можно прийти без точного запроса. Достаточно описать ощущение или состояние.'],
    ['02', 'Специалист оценивает состояние', 'Уточняет противопоказания, привычки ухода, прошлые процедуры и ограничения.'],
    ['03', 'Выбирается уместная процедура', 'Вам объясняют, что можно сделать сейчас, чего лучше не делать и почему.'],
    ['04', 'Вы уходите с понятным планом', 'После процедуры остаются рекомендации для домашнего ухода и дальнейших действий.']
  ],
  cases: [
    {
      tag: 'Лицо',
      title: 'Свежесть и качество кожи',
      text: 'Временный пример карточки. В финальной версии здесь будет реальный кейс с описанием запроса и процедуры.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80'
    },
    {
      tag: 'Тело',
      title: 'Ощущение лёгкости',
      text: 'Временный пример карточки без обещаний результата. Фото и детали добавляются после согласования.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80'
    },
    {
      tag: 'Уход',
      title: 'Понятная домашняя система',
      text: 'Пример для будущего кейса: что было в уходе, что изменили, какие рекомендации даны.',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80'
    }
  ],
  reviews: [
    {
      request: 'Запрос: подобрать уход',
      text: 'Я пришла без понимания, какая процедура мне нужна. Понравилось, что сначала меня выслушали, посмотрели кожу и только потом предложили уход.',
      name: 'Временный отзыв'
    },
    {
      request: 'Запрос: выглядеть свежее',
      text: 'После визита стало понятно, что делать дома и как поддерживать состояние кожи без лишних средств.',
      name: 'В финальной версии — реальные отзывы'
    },
    {
      request: 'Запрос: вернуться к уходу',
      text: 'Спокойная атмосфера, понятные объяснения и ощущение, что процедуру подбирают именно под меня.',
      name: 'Анонимно'
    }
  ],
  faq: [
    ['Нужно ли заранее выбирать услугу?', 'Нет. Можно прийти с ощущением или запросом, а конкретную процедуру подобрать уже после осмотра и разговора.'],
    ['Можно ли прийти, если кожа чувствительная?', 'Да, но важно заранее рассказать о реакциях, аллергиях, заболеваниях, беременности, приёме препаратов и прошлых процедурах.'],
    ['Сколько процедур понадобится?', 'Это зависит от задачи и исходного состояния. Иногда достаточно одного ухода, иногда нужен курс. Решение принимается после консультации.'],
    ['Можно ли перед важным событием?', 'Да, но не все процедуры подходят прямо перед событием. Лучше предупредить о дате заранее, чтобы выбрать безопасный по срокам вариант.'],
    ['Будут ли рекомендации домой?', 'Да. После визита клиент получает понятные рекомендации: что использовать, чего временно избегать и как поддерживать эффект.']
  ]
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const render = (selector, html) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = html;
};

const renderGrid = (selector, items, templateFn) => {
  render(selector, items.map((item, index) => templateFn(item, index)).join(''));
};

const renderContent = () => {
  renderGrid('#statesGrid', content.states, (item, index) =>
    `<article class="state-card reveal">
      <span class="state-card__index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      <p class="state-card__text">${escapeHtml(item)}</p>
    </article>`
  );

  renderGrid(
    '#directionsGrid',
    content.directions,
    (item) => `
      <article class="direction-card card-surface card-surface--light reveal">
        <div class="card-media">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <div class="card-meta">${item.meta.map((meta) => `<span>${escapeHtml(meta)}</span>`).join('')}</div>
          <a class="card-link" href="#contacts">Подробнее →</a>
        </div>
      </article>`
  );

  renderGrid(
    '#principlesList',
    content.principles,
    ([num, title, text]) => `
      <article class="principle card-surface card-surface--dark reveal">
        <div class="principle__number">${escapeHtml(num)}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </article>`
  );

  renderGrid(
    '#visitSteps',
    content.steps,
    ([num, title, text]) => `
      <article class="step card-surface card-surface--dark reveal">
        <div class="step__number">${escapeHtml(num)}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </article>`
  );

  renderGrid('#casesGrid', content.cases, (item) => {
    const afterAttr = item.imageAfter ? ` data-image-after="${item.imageAfter}"` : '';
    return `
      <article class="case-card card-surface card-surface--light reveal"
        data-title="${escapeHtml(item.title)}"
        data-text="${escapeHtml(item.text)}"
        data-image="${item.image}"${afterAttr}
        tabindex="0"
        role="button"
        aria-label="Открыть кейс: ${escapeHtml(item.title)}">
        <div class="card-media">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="case-card__tag">${escapeHtml(item.tag)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <span class="case-card__hint">Смотреть подробнее</span>
        </div>
      </article>`;
  });

  renderGrid(
    '#reviewsGrid',
    content.reviews,
    (item) => `
      <article class="review-card card-surface card-surface--dark reveal">
        <span class="review-card__quote" aria-hidden="true">"</span>
        <p class="eyebrow review-card__request">${escapeHtml(item.request)}</p>
        <p class="review-card__text">${escapeHtml(item.text)}</p>
        <div class="review-card__name">${escapeHtml(item.name)}</div>
      </article>`
  );

  renderGrid(
    '#faqList',
    content.faq,
    ([q, a], index) => `
      <article class="faq-item reveal" id="faq-item-${index}">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
          <span>${escapeHtml(q)}</span>
          <span class="faq-question__icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}" role="region">${escapeHtml(a)}</div>
      </article>`
  );
};

const initMobileNav = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const overlay = document.getElementById('navOverlay');
  if (!menuToggle || !nav) return;

  const setMenuOpen = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('is-menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    if (overlay) {
      overlay.hidden = !isOpen;
      overlay.setAttribute('aria-hidden', String(!isOpen));
    }
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('is-open'));
  });

  overlay?.addEventListener('click', () => setMenuOpen(false));

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) setMenuOpen(false);
  });
};

const initFaq = () => {
  document.querySelector('#faqList')?.addEventListener('click', (event) => {
    const button = event.target.closest('.faq-question');
    if (!button) return;

    const item = button.closest('.faq-item');
    const isOpen = item?.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });
};

const initCaseModal = () => {
  const modal = document.getElementById('caseModal');
  const modalGallery = document.getElementById('modalGallery');
  const modalImage = modal?.querySelector('.modal__image');
  const modalTitle = modal?.querySelector('.modal__title');
  const modalText = modal?.querySelector('.modal__text');
  const closeBtn = modal?.querySelector('.modal__close');
  if (!modal || !modalGallery || !modalImage || !modalTitle || !modalText || !closeBtn) return;

  let lastFocus = null;

  const closeModal = () => {
    modal.classList.remove('is-active');
    document.body.classList.remove('is-modal-open');
    modal.setAttribute('aria-hidden', 'true');
    modalGallery.hidden = true;
    modalGallery.innerHTML = '';
    modalImage.hidden = false;
    lastFocus?.focus();
  };

  const openModal = (card) => {
    lastFocus = document.activeElement;
    const title = card.dataset.title || '';
    const text = card.dataset.text || '';
    const image = card.dataset.image || '';
    const imageAfter = card.dataset.imageAfter || '';

    modalTitle.textContent = title;
    modalText.textContent = text;

    if (imageAfter) {
      modalGallery.innerHTML = `
        <figure>
          <img src="${image}" alt="${title} — до">
          <figcaption>До</figcaption>
        </figure>
        <figure>
          <img src="${imageAfter}" alt="${title} — после">
          <figcaption>После</figcaption>
        </figure>`;
      modalGallery.hidden = false;
      modalImage.hidden = true;
    } else {
      modalGallery.hidden = true;
      modalGallery.innerHTML = '';
      modalImage.hidden = false;
      modalImage.src = image;
      modalImage.alt = title;
    }

    modal.classList.add('is-active');
    document.body.classList.add('is-modal-open');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  };

  const casesGrid = document.querySelector('#casesGrid');
  casesGrid?.addEventListener('click', (event) => {
    const card = event.target.closest('.case-card');
    if (card) openModal(card);
  });

  casesGrid?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.case-card');
    if (!card) return;
    event.preventDefault();
    openModal(card);
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
  });
};

const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
};

document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  initMobileNav();
  initFaq();
  initCaseModal();
  initReveal();
});
