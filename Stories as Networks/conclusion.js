var text = document.getElementById('text');
document.body.addEventListener('click', onClick);
var clicks = 0;
function onClick(){
    clicks += 1;
    console.log("onClick", clicks);
}

if ( clicks < 2) { 
    text.style.animation = "textFade 3s 1s forward";
}

// function addAnimation(event){
//     event.target.classList.add('animation');
// }