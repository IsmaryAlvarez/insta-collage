$(document).ready(function(){

  $('#iniciar').click(function(){
    document.location.replace('photos.html')
  })


// Habilitando el botón con el input en el textarea
var password = document.getElementsByName('password')[0];
var email = document.getElementsByName('email')[0];

password.addEventListener('input', function(){
  if(password.value.length != 0 && email.value.length != 0 ){
  document.getElementById("iniciar").disabled = false;
}     
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
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}});