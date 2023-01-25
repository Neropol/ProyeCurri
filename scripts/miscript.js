'use strict';

const itemBar = document.querySelector('.nav__ul');
const itemBarRes = document.querySelector('.nav__ul_Res');
const Contenido1 = document.querySelector('.datos1');
const Contenido2 = document.querySelector('.datos2');
const botonRes = document.querySelector('.nav_Responsive_button');
const conte = document.querySelector('.nav_li_conteiner');
//iconst menuBar = document.querySelector('.nav__ul_Res');

visualViewport.addEventListener('resize', () => {
  if (visualViewport.width > 800) {
    itemBarRes.style.display = 'none';
    //    console.log('hizo resize');
    //    console.log(visualViewport.width);
  }
});

function seleMenu(e) {
  let idName = e.target.getAttribute('id');
  //console.log('idName es ');
  //console.log(idName);

  ////selecciona menu por "id"
  switch (idName) {
    case 'name':
      Contenido1.innerHTML = 'Hi, My name is';
      Contenido2.innerHTML = 'Tony Castro';
      //console.log('entro en nombre');
      break;
    case 'mail':
      //console.log('entro en mail');
      Contenido1.innerHTML = 'My email address is';
      Contenido2.innerHTML = 'tony.castro@example.com';
      break;
    case 'cumple':
      //console.log('entro en cumple');
      Contenido1.innerHTML = 'My birthday is';
      Contenido2.innerHTML = '11/3/1975';
      break;
    case 'dir':
      //console.log('entro en dir');
      Contenido1.innerHTML = 'My address is';
      Contenido2.innerHTML = '7658 Bollinger Rd';
      break;
    case 'tel':
      //console.log('entro en tel');
      Contenido1.innerHTML = 'My phone number is';
      Contenido2.innerHTML = '(662) 338-8944';
      break;
    case 'pass':
      //console.log('entro en pass');
      Contenido1.innerHTML = 'My password is';
      Contenido2.innerHTML = 'flores';
      break;

    default:
    // code block
  }
}

///////////seleccion demenu  on click
itemBar.addEventListener('click', function (e) {
  seleMenu(e);
});

///////////////////seccion barra responsive
///////////mouse over para menu celular

botonRes.addEventListener('mouseover', function (e) {
  itemBarRes.style.display = 'inline-Block';
  conte.style.display = 'inline-Block';

  console.log('esta dentro');
});

///////////mouse leave  para menu celular

itemBarRes.addEventListener('click', function (e) {
  seleMenu(e);
  console.log('click');
});
/*
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    console.log(data);
  },
});
*/
