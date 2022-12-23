var user, pass;

//Muesta o oculta el Div de informacion
function divshow(text, showOrHide) {
  $('.update').html(text + "<button type='button' class='close' onclick='divshow(\" \",false);'>×</button>");
  if(!$('.update').is(":visible")){
    $('.update').toggle("slow","swing");
	}
  if(!showOrHide){
    $('.update').toggle("slow","swing");
  }
}

//funcion para validar y iniciar Sesion
function iniciarSesion() {
    
    user = $('input:text').val();
    pass = $('input:password').val();
 
    if (user.length > 0 && pass.length > 0) {
       event.preventDefault();
       divshow('ok', true);
     
     }
}