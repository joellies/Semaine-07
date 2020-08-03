let element = document.getElementById('m-contactMenu__landing');

let changeBackground = window.addEventListener('scroll', () => {
  if (window.scrollTop > 150) {
    element.classList.add('transparent');
  } else {
    element.classList.remove('transparent');
  }
});
