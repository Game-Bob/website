export function setupLanguageGateway() {
    const stage = document.getElementById('language-stage');
    if (!stage) return;

    const browserLanguage = (navigator.language || 'en').split('-')[0];
    stage.querySelector<HTMLElement>(`[data-language="${browserLanguage}"]`)?.setAttribute('data-recommended', 'true');
    const meow = document.getElementById('portal-meow');
    const languageLinks = stage.querySelectorAll<HTMLElement>('[data-meow]');

    const showMeow = (link: HTMLElement) => {
        if (!meow) return;
        stage.classList.remove('meow-active');
        meow.textContent = link.dataset.meow || '';
        window.requestAnimationFrame(() => stage.classList.add('meow-active'));
    };

    const hideMeow = () => stage.classList.remove('meow-active');

    languageLinks.forEach(link => {
        link.addEventListener('pointerenter', () => showMeow(link));
        link.addEventListener('pointerleave', hideMeow);
        link.addEventListener('focus', () => showMeow(link));
        link.addEventListener('blur', hideMeow);
    });

    stage.addEventListener('pointermove', ({ clientX, clientY }) => {
        const x = (clientX / window.innerWidth - 0.5) * 2;
        const y = (clientY / window.innerHeight - 0.5) * 2;
        stage.style.setProperty('--pointer-x', x.toFixed(3));
        stage.style.setProperty('--pointer-y', y.toFixed(3));
    });

}
