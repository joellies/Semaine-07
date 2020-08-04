let element = document.getElementById('m-landing__contactBtn');

let changeBackground = window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    element.classList.add('transparent');
  } else {
    element.classList.remove('transparent');
  }
});
