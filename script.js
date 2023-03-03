(function openMenu(selectorTop) {
    let header = document.querySelector(selectorTop);
    let btn = header.querySelector('.nav_btn');
    let nav = header.querySelector('.nav');
    btn.addEventListener('click', function() {
        btn.classList.toggle('nav_btn_close');
        btn.classList.toggle('nav_btn_open');
        nav.classList.toggle('nav_visible')
    })
})('.header');