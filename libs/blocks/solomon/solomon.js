export default function init(el) {
    const id = getUniqueId(el);
    // const accordion = createTag('p', { class: 'accordion', id: `accordion-${id}`, role: 'presentation' });
    const isSeo = el.classList.contains('seo');

    // const headings = el.querySelectorAll(':scope > div:nth-child(odd)');
    // const items = [...headings].map((heading, idx) => createItem(accordion, id, heading, idx + 1));

    if (isSeo) { setSEO(items); }

    el.innerHTML = '';
    el.className = 'solomon-container';
    el.append(accordion);
}