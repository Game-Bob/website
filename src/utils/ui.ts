interface UIState {
    lockCount: number;
    scrollPos: number;
}

const getState = (): UIState => {
    if (typeof window === 'undefined') return { lockCount: 0, scrollPos: 0 };
    if (!(window as any).__GB_UI__) {
        (window as any).__GB_UI__ = { lockCount: 0, scrollPos: 0 };
    }
    return (window as any).__GB_UI__;
};

export const lockScroll = () => {
    if (typeof window === 'undefined') return;
    const state = getState();

    state.lockCount++;
    if (state.lockCount === 1) {
        state.scrollPos = window.scrollY;
        const html = document.documentElement;
        html.classList.add('is-locked');
        document.body.style.top = `-${state.scrollPos}px`;
    }
};

export const unlockScroll = () => {
    if (typeof window === 'undefined') return;
    const state = getState();

    state.lockCount = Math.max(0, state.lockCount - 1);
    if (state.lockCount === 0) {
        const html = document.documentElement;
        html.classList.remove('is-locked');
        document.body.style.top = '';
        window.scrollTo(0, state.scrollPos);
    }
};

export const resetUIState = () => {
    if (typeof window === 'undefined') return;
    const state = getState();
    state.lockCount = 0;
    const html = document.documentElement;
    html.classList.remove('is-locked');
    document.body.style.top = '';
};
