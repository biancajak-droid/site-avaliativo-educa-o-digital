// 1. DADOS DINÂMICOS
const benefitsData = [
    { title: "Saúde", desc: "Alimentos orgânicos livres de agrotóxicos." },
    { title: "Comunidade", desc: "Conheça seus vizinhos e troque experiências." },
    { title: "Educação", desc: "Workshops gratuitos sobre botânica e solo." }
];

const faqData = [
    { q: "Preciso pagar para participar?", a: "Não, o projeto é mantido por parcerias locais e trabalho voluntário." },
    { q: "Onde ficam as hortas?", a: "Atualmente em 5 parques centrais da cidade." }
];

// 2. RENDERIZAÇÃO
function init() {
    const grid = document.getElementById('grid-benefits');
    benefitsData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    const accordionGroup = document.getElementById('accordion-group');
    faqData.forEach((item, index) => {
        accordionGroup.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                    ${item.q}
                </button>
                <div class="accordion-content">
                    <p style="padding: 1rem;">${item.a}</p>
                </div>
            </div>
        `;
    });
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 16;
document.getElementById('btn-increase-font').addEventListener('click', () => {
    currentFontSize += 2;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
});

document.getElementById('btn-decrease-font').addEventListener('click', () => {
    if(currentFontSize > 12) {
        currentFontSize -= 2;
        document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
    }
});

// 4. MODO ALTO CONTRASTE
document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// 5. ACORDEÃO LOGIC
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isOpen = element.getAttribute('aria-expanded') === 'true';
    
    element.setAttribute('aria-expanded', !isOpen);
    content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
}

// 6. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Iniciar
init();
