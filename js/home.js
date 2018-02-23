var x;
var path = "imagens/";
x=0;
var imgs =new Array(path+'forest.jpg',path+'valley.jpg',path+'nature.jpg',path+'jungle.jpg');
var length = imgs.length;
var img = document.getElementById("slideImage");
function slide(){
    x++;
    if(x<length){
        img.src = imgs[x];
    }else if(x>=length){
        x = 0;
        img.src = imgs[x];
    }
}
function slideBack(){
    x--;
    if(x>=0){
        img.src = imgs[x];
    }else if(x <= length){
        x = length-1;
        img.src = imgs[x];
    }
}
function autoSlide(){
    if(x<length){
        img.src = imgs[x];
    }else if(x>=length){
        x = 0;
        img.src = imgs[x];
    }
    x++;
}
setInterval(autoSlide, 5000);