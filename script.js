
const blocos = document.querySelectorAll('.animacao, .animacao2, .animacao3, .animacao4, .animacao5, .animacao6');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('visivel');
    } else {
      
      entry.target.classList.remove('visivel');
    }
  });
}, {
  threshold: 0.5
});


blocos.forEach(animacao => observer.observe(animacao));