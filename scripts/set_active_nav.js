var url = document.location.href;

document.querySelectorAll('.navigation__nav-element').forEach(element => {
  if (url === element.href) {
    element.classList.add('navigation__nav-element-active');
  }
});