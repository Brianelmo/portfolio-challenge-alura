const nombre = document.querySelector('.form__nombre'); 
const email = document.querySelector('.form__email');  
const form = document.querySelector('.contacto__form'); 
const parrafo = document.querySelector('.warning'); 


form.addEventListener('submit', (e) => { 
  e.preventDefault();  
  let warning = ''; 
  let emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  let entrar = false;
  parrafo.innerHTML = '';
  if(nombre.value.length < 6) {
    warning += `el nombre es valido <br>`
    entrar = true;
  }  
  console.log(emailre.test(email.value));
  if(!emailre.test(email.value)) {
    warning += `El email no es valido <br>` 
    entrar = true;
  }  

  if(entrar = true) {
    parrafo.innerHTML = warning;
  }


})

