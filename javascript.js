function ir() {
   var a = 1234;
   var b = "Jhandry";

if (document.form.contrasena.value==a && document.form.usuario.value==b){
   alert ("Bienvenidos");
   window.location="Elementos.html"
}
else{
alert("Por favor vuelva a ingresar sus datos");
}
}




function playPause(){
   var mivideo = document.getElementById("video");

   if(mivideo.paused)
      mivideo.play();
   else
      mivideo.pause();

}
function stop(){
   var mivideo = document.getElementById("video");
   mivideo.pause();
   mivideo.currentTime = 0;

}
function skip(value){
   var mivideo = document.getElementById("video");
    mivideo.currentTime += value;
}


function listado(){
   window.location="leerXML.php"
}

function horario(){
   window.location="Ajax.html"
}

function audio(){
   window.location="audio.html"
}

function calcula(){
   window.location="calcu.html"
}


