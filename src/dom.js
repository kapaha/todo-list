const elems = {
    body: document.body,
    sideMenu: document.querySelector('[data-side-menu]')
};

function toggleSideMenu() {
    if (elems.sideMenu) {
        if (isDesktopView()) {
            elems.body.classList.toggle('desktop-open');
            elems.sideMenu.classList.remove('mobile-open');
        } else if (!elems.body.classList.contains('desktop-open')) {
            elems.body.classList.add('desktop-open');
            elems.sideMenu.classList.toggle('mobile-open');
        } else {
            elems.sideMenu.classList.toggle('mobile-open');
        }
    }
}

function isDesktopView() {
    return window.matchMedia('(min-width: 768px)').matches;
}

export { toggleSideMenu };