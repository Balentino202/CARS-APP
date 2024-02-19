const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('header') && nav.classList.contains('show')) {
    nav.classList.remove('show');
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    nav.classList.remove('show');
  }
});


function toggleFAQ(id) {
  const faqContent = document.getElementById(`faq${id}`);
  const faqItem = faqContent.parentElement;

  faqItem.classList.toggle("active");
}


