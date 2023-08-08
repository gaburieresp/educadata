document.addEventListener("DOMContentLoaded", function() {

  var currentPage = window.location.pathname.split('/').pop();

  var navLinks = document.querySelectorAll('.links a');

  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];

    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      break;
    }
  }
});


const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('active');
});
