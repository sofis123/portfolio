
window.addEventListener('load', () => {
    const sliders = document.querySelectorAll(".slide-in");

    window.addEventListener('scroll', () => sliders.forEach((slider, key) => {
        if(!slider.classList.contains('appear') && isScrolledIntoView(slider)) {
            slider.classList.add('appear');
            console.log(slider);
        }
    }))

    sliders.forEach((slider, key) => {
        if(!slider.classList.contains('appear') && isScrolledIntoView(slider)) {
            slider.classList.add('appear');
            console.log(slider);
        }
    })

});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}