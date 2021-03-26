console.log('Hey bitch');

//create an array with multiple colors
let colors = ['#fcf9f1','#f2e8d8','#e7d7be','#ccd5ae','#8a9a56'];
//when page is refreshed, the background will change color
let changeBackgroundColor = function() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};
//run the function
changeBackgroundColor();

