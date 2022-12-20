
const ham = document.querySelector('#ham');
const enlaces = document.querySelector('#menu ul');
const barras = document.querySelectorAll('#ham span');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});        
});

const links = document.querySelectorAll('#menu a');
links.forEach(link => {
link.addEventListener("click", function () {   
    enlaces.classList.remove('activado');
    barras.forEach(child => {child.classList.remove('animado')});
    
  });
});