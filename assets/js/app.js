$(document).ready(function(){

// Habilitando el botón con el input en el textarea
var password = $('.password');
var email = $('.email');

$(".form-control").keyup(function(){
  if(password.val() != '' && email.val() != '' ){
  $("#iniciar").removeAttr('disabled');
}
});

  $('#iniciar').click(function(){
    if(password.val() !== 123456 && password.val().length >= 6){
    document.location.replace('photos.html');
    }else{
      alert('Ingrese contraseña válida');
    }
    
  })

});
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');//ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_foto));
}