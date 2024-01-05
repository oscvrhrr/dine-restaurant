const enjoyableTitle = document.getElementsByClassName('hero__sub-heading')[0];
const sourcedTitle = document.getElementsByClassName('hero__sub-heading-two')[0];
const heroBottom = document.getElementsByClassName('card')[0];


window.addEventListener('scroll', () => {
    if(heroBottom.getBoundingClientRect().top <= 0) {
        enjoyableTitle.classList.add('hero__sub-heading--active')
    }

    if(heroBottom.getBoundingClientRect().bottom <= 0) {
        sourcedTitle.classList.add('hero__sub-heading-two--active')
    }
})