const byId = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderNav(chapters) {
  byId("chapter-nav").innerHTML = chapters.map((chapter, index) => `
    <li>
      <a href="#${chapter.id}" data-nav-link="${chapter.id}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(chapter.title)}</strong>
      </a>
    </li>
  `).join("");
}

function renderReminders() {
  byId("reminder-list").innerHTML = SNAPNAMES_GUIDE.reminders.map((item) => `
    <li>${escapeHtml(item)}</li>
  `).join("");
}

function renderLinks(links = []) {
  if (!links.length) return "";

  return `
    <div class="chapter-links" aria-label="Helpful links">
      ${links.map((link) => `
        <a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>
      `).join("")}
    </div>
  `;
}

function renderScreens(screens = []) {
  if (!screens.length) return "";

  return `
    <div class="screens-stack">
      ${screens.map((screen) => `
        <figure class="screen-walkthrough">
          <div class="screen-frame">
            <div class="screen-bar">
              <span></span><span></span><span></span>
            </div>
            <div class="screen-stage">
              <img src="${escapeHtml(screen.src)}" alt="${escapeHtml(screen.alt)}">
              ${screen.points.map((point) => `
                <button class="hotspot" type="button" style="left:${point.x}%; top:${point.y}%;" aria-label="${escapeHtml(point.label)}">
                  ${point.n}
                </button>
              `).join("")}
            </div>
          </div>
          <figcaption>
            ${screen.points.map((point) => `
              <div class="caption-point">
                <span>${point.n}</span>
                <div>
                  <strong>${escapeHtml(point.label)}</strong>
                  <p>${escapeHtml(point.text)}</p>
                </div>
              </div>
            `).join("")}
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function renderDetails(details = []) {
  if (!details.length) return "";

  return `
    <div class="details-list">
      ${details.map((detail) => `
        <details>
          <summary>${escapeHtml(detail.title)}</summary>
          <p>${escapeHtml(detail.copy)}</p>
        </details>
      `).join("")}
    </div>
  `;
}

function renderChapters(chapters) {
  byId("guide-sections").innerHTML = chapters.map((chapter, index) => `
    <section class="chapter" id="${chapter.id}" data-chapter>
      <div class="chapter-header">
        <span class="chapter-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="eyebrow">${escapeHtml(chapter.eyebrow)}</p>
          <h2>${escapeHtml(chapter.title)}</h2>
          <p>${escapeHtml(chapter.summary)}</p>
        </div>
      </div>

      ${renderLinks(chapter.links)}

      ${renderScreens(chapter.screens)}

      <div class="chapter-grid">
        <section class="steps-card" aria-label="${escapeHtml(chapter.title)} steps">
          <h3>Steps</h3>
          <ol>
            ${chapter.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </section>

        <section class="important-card" aria-label="${escapeHtml(chapter.title)} important notes">
          <h3>Important</h3>
          <ul>
            ${chapter.important.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      </div>

      ${renderDetails(chapter.details)}
    </section>
  `).join("");
}

function renderGlossary() {
  byId("glossary-grid").innerHTML = SNAPNAMES_GUIDE.glossary.map((item) => `
    <article class="glossary-card">
      <strong>${escapeHtml(item.term)}</strong>
      <p>${escapeHtml(item.definition)}</p>
    </article>
  `).join("");
}

function setActiveNav() {
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  const current = chapters
    .filter((chapter) => chapter.getBoundingClientRect().top <= 170)
    .at(-1) || chapters[0];

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.navLink === current?.id);
  });
}

function bindEvents() {
  window.addEventListener("scroll", setActiveNav, { passive: true });
  window.addEventListener("resize", setActiveNav);

  document.addEventListener("click", (event) => {
    const hotspot = event.target.closest(".hotspot");
    if (!hotspot) return;

    const frame = hotspot.closest(".screen-walkthrough");
    const point = frame?.querySelector(`.caption-point:nth-child(${hotspot.textContent.trim()})`);
    point?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

renderNav(SNAPNAMES_GUIDE.chapters);
renderReminders();
renderChapters(SNAPNAMES_GUIDE.chapters);
renderGlossary();
bindEvents();
setActiveNav();
