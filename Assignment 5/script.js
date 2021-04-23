//use animation library to animate h1
const header = document.querySelector('.header');
header.classList.add('animate__animated', 'animate__pulse');
header.style.animationIterationCount = "infinite";

//use animation library to animate =
const mix1 = document.querySelector('.mix1');
mix1.classList.add('animate__animated', 'animate__heartBeat');
mix1.style.setProperty('--animate-duration', '1s');
mix1.style.animationIterationCount = "infinite";
const mix2 = document.querySelector('.mix2');
mix2.classList.add('animate__animated', 'animate__heartBeat');
mix2.style.setProperty('--animate-duration', '1s');
mix2.style.animationIterationCount = "infinite";
const mix3 = document.querySelector('.mix3');
mix3.classList.add('animate__animated', 'animate__heartBeat');
mix3.style.setProperty('--animate-duration', '1s');
mix3.style.animationIterationCount = "infinite";

//when equal sign is clicked, create and append "orange" class, console log recipe
$(".mix1").click(function() {
    function mixOrange(red, yellow){
        let orange = red + yellow;
        return orange;
    }
    console.log(mixOrange);

    let orange = document.createElement("p");
    orange.innerText = "Orange";
    document.querySelector("#recipe1").appendChild(orange);
    orange.style.color = "#FF924C";
});

//when equal sign is clicked, create and append "green" class, console log recipe
$(".mix2").click(function() {
    function mixGreen(yellow, blue){
        let green = yellow + blue;
        return green;
    }
    console.log(mixGreen);

    let green = document.createElement("p");
    green.innerText = "Green";
    document.querySelector("#recipe2").appendChild(green);
    green.style.color = "#8AC926";
});

//when equal sign is clicked, create and append "green" class, console log recipe
$(".mix3").click(function() {
    function mixPurple(blue, red){
        let purple = blue + red;
        return purple;
    }
    console.log(mixPurple);

    let purple = document.createElement("p");
    purple.innerText = "Purple";
    document.querySelector("#recipe3").appendChild(purple);
    purple.style.color = "#6A4C93";
});