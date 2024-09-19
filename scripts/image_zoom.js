const image = document.getElementById('photoBlock');
const full_image = document.getElementById('photoFullSize');
const wrapper = document.getElementById('darkWrapper');
image.addEventListener('click', function(event) {
    event.stopPropagation();
    wrapper.classList.add('wrapper-dark');
    full_image.style.transition = "width 0.6s linear";
    full_image.classList.add('photo-full-size-active');
});

document.body.addEventListener('click', function() {
    full_image.style.transition = "none";
    full_image.classList.remove('photo-full-size-active');
    wrapper.classList.remove('wrapper-dark');
});