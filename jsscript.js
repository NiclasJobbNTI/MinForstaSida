
let image = document.querySelector('#rocket');
       
      
function imageFun() {
            if (image.src.match("img/launch1.jpg")) {
                image.src = "img/launch2.jpg";
            }
            else {
                image.src = "img/launch1.jpg";
            }
}