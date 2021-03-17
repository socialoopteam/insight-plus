window.addEventListener('scroll', function() {
    let link = document.querySelector('.nav-link');
    let link1 = document.querySelector('.link-1');
    let link2 = document.querySelector('.link-2');
    let link3 = document.querySelector('.link-3');
    let logo = document.querySelector('#uniquelogo');
    let logoDesktop = document.querySelector('#uniqueLogoDesktop');

    link.classList.toggle('scrolling-active', window.scrollY > 0);
    link1.classList.toggle('scrolling-active', window.scrollY > 0);
    link2.classList.toggle('scrolling-active', window.scrollY > 0);
    link3.classList.toggle('scrolling-active', window.scrollY > 0);
    logo.classList.toggle('logomenu', window.scrollY > 85);
    logoDesktop.classList.toggle('logomenu', window.scrollY > 85);
});