var sliderImagens=  [
    "imagens/peep.jpg",
    "imagens/rafael_pepperoni.png",
    "imagens/valdemar.jpg"
];
//estas imagens são apenas para testes, favor trocar

var contador = 0;

function sliderAnterior(){
   var slider = document.getElementById("slider");
   contador--;
   if (contador < 0) {
       contador = sliderImagens.length-1;
   }
   slider.src = sliderImagens[contador]; 
}   

function sliderPosterior(){
    var slider = document.getElementById("slider");
    contador++;
    if (contador >= sliderImagens.length) {
        contador = 0;
    }
    slider.src = sliderImagens[contador];
}