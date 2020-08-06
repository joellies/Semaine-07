let element = document.getElementsByName('landing__headerBtn');
console.log(element);
let changeBackground = window.addEventListener('scroll', () => {
  element.forEach(el => {
    if (window.scrollY > 750) {
      el.classList.add('transparent');
    } else {
      el.classList.remove('transparent');
    }
  });
});
