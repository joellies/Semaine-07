let changeBackground = window.onscroll ( => {
  if (window.scrollTop() > 100) {
    '.landing__contactBtn'.addClass('transparent');
  } else {
    '.landing__contactBtn'.removeClass('transparent');
  }
});

