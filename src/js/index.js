const cards = document.querySelectorAll('.projetos div');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const downloadLink = document.getElementById('downloadLink') 
const downloadBtn = document.getElementById('downloadBtn')

downloadBtn.addEventListener('click', () => {
    downloadLink.click()
})

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')
})

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        if (cardTop < triggerBottom && cardBottom > 0) {
            card.classList.add('scroll-animate');
        } else {
            card.classList.remove('scroll-animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();