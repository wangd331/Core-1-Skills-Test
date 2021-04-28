//base code for output

let inputElement = document.querySelector("#input");
let output = document.querySelector("#output");

//random word generator
//make arrays for each soft consonant/sound

let t = ['to', 'tag', 'table', 'talk', 'typography', 'twig', 'trace', 'truth', 'triangle', 'truck', 'temptation', 'tiger', 'trouble'];

let p = ['pop', 'premium', 'pyramid', 'paper', 'private', 'plastic', 'personality', 'pedestrian', 'pocket', 'pie', 'protect', 'paint'];

let s = ['skin', 'second', 'student', 'sound', 'scenario', 'soup', 'sour', 'symbol', 'shy', 'snack', 'so', 'salad'];

let f = ['failure', 'flex', 'fish', 'friend', 'firefighter', 'floor', 'fever', 'feminist', 'forbid', 'family', 'film', 'fast'];

let h = ['heavy', 'herb', 'hospital', 'hip', 'horse', 'highway', 'harmony', 'husband', 'haircut', 'hold', 'hello', 'help'];

let k = ['kidney', 'killer', 'knee', 'kitchen', 'king', 'kick', 'key', 'kaleidoscope', 'kettle', 'kindergarden', 'keep', 'kale'];

let c = ['camera', 'cat', 'committee', 'cup', 'cow', 'crime', 'cash', 'climb', 'capitalist', 'cake', 'coffee','crystal'];

let ch = ['check', 'chiropracter', 'challenge', 'chicken', 'chemistry', 'chocolate', 'cheese', 'chives', 'chip', 'chilly'];

let sh = ['sharp', 'shellfish', 'shirt', 'share', 'shop', 'shame', 'short', 'sheep', 'shocked', 'shoe'];

let th = ['the', 'that', 'therapy', 'thought', 'thin', 'thick', 'thirteen', 'thumb', 'things', 'theory'];

//generate random word

let tWord = t[Math.floor(Math.random() * t.length)];
console.log("random word starting with T: " + tWord);

let pWord = p[Math.floor(Math.random() * p.length)];
console.log("random word starting with P: " + pWord);

let sWord = s[Math.floor(Math.random() * s.length)];
console.log("random word starting with S: " + sWord);

let fWord = f[Math.floor(Math.random() * f.length)];
console.log("random word starting with F: " + fWord);

let hWord = h[Math.floor(Math.random() * h.length)];
console.log("random word starting with H: " + hWord);

let kWord = k[Math.floor(Math.random() * k.length)];
console.log("random word starting with K: " + kWord);

let cWord = c[Math.floor(Math.random() * c.length)];
console.log("random word starting with C: " + cWord);

let chWord = ch[Math.floor(Math.random() * ch.length)];
console.log("random word starting with Ch: " + chWord);

let shWord = sh[Math.floor(Math.random() * sh.length)];
console.log("random word starting with Sh: " + shWord);

let thWord = th[Math.floor(Math.random() * th.length)];
console.log("random word starting with Th: " + thWord);

//run word counter function
function countWords() {
    // Get the input text value
    var text = inputElement.value;
    // Initialize the word counter
    var wordCount = 0;
    // Loop through the text and count spaces in it 
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];
        // Check if the character is a space
        if (currentCharacter == " ") {
            wordCount += 1;
        }
    }
    // Add 1 to make the count equal to the number of words (count of words = count of spaces + 1)
        wordCount += 1;
    //console log word count
    console.log("word count: " + wordCount);
}

// Detect when key is pressed in the text box
inputElement.addEventListener("keydown", function(event){
  
  //Check if enter key is pressed
  if (event.key == " "){
    
    //console log the text
    console.log("user typed: " + inputElement.value);

    //run and console log word counter
    countWords();

    //console log starting letter
    console.log("starting letter: " + inputElement.value.charAt(0));

    //show "Did you say..."
    document.querySelector("#output-label").style.display = "block";

    //output
    output.innerText = '"' + inputElement.value + '"' + "?";

    // output random word
    output.style.display = "block";
    let letter = inputElement.value.charAt(0);

    if (["t"].includes(letter)){
        output.innerText = tWord;
    };

    if ([" t"].includes(inputElement.value)){
        output.innerText = " " + tWord;
    };

    if (["p"].includes(letter)){
        output.innerText = pWord;
    };

    if ([" p"].includes(inputElement.value)){
        output.innerText = " " + pWord;
    };

    if (["s"].includes(letter)){
        output.innerText = sWord;
    };

    if ([" s"].includes(inputElement.value)){
        output.innerText = " " + sWord;
    };

    if (["f"].includes(letter)){
        output.innerText = fWord;
    };

    if ([" f"].includes(inputElement.value)){
        output.innerText = " " + fWord;
    };

    if (["h"].includes(letter)){
        output.innerText = hWord;
    };

    if ([" h"].includes(inputElement.value)){
        output.innerText = " " + hWord;
    };

    if (["k"].includes(letter)){
        output.innerText = kWord;
    };

    if ([" h"].includes(inputElement.value)){
        output.innerText = " " + hWord;
    };

    if (["c"].includes(letter)){
        output.innerText = cWord;
    };

    if ([" c"].includes(inputElement.value)){
        output.innerText = " " + cWord;
    };

    if ([" th"].includes(inputElement.value)){
        output.innerText = thWord;
    };

    if ([" ch"].includes(inputElement.value)){
        output.innerText = chWord;
    };

    if ([" sh"].includes(inputElement.value)){
        output.innerText = shWord;
    };

    //text scrambler from https://github.com/Recidvst/scrambling-letters
    Scrambler({
        target: '#output',
        random: [500, 1000],
        speed: 100,
      });

    //show reset button
    let reset = document.querySelector("#reset");
    reset.style.display = "block";

    // Reset the value inside the text box
    reset.addEventListener("click", function(){
        inputElement.value = "";
        reset.style.display = "none";
        output.style.display = "none";
        document.querySelector("#output-label").style.display = "none";
    });
  }
});

// // Detect button click, run the same function
// let submit = document.querySelector("#submit");
// submit.addEventListener("click", function(event){
  
//     // Let's show the text on the page!
//     console.log("user typed: " + inputElement.value);

//     //run word counter
//     countWords();

//     //console log starting letter
//     console.log("starting letter: " + inputElement.value.charAt(0));
  
//     //show "Did you say..."
//     document.querySelector("#output-label").style.display = "block";
      
//     // Set what we typed (plus "You typed: ") to the inside of the result paragraph
//     output.style.display = "block";
//     output.innerText = '"' + inputElement.value + '"' + "?";

//     //text scrambler from https://github.com/Recidvst/scrambling-letters
//     Scrambler({
//         target: '#output',
//         random: [500, 1000],
//         speed: 100,
//     });
  
//     //show reset button
//     let reset = document.querySelector("#reset");
//     reset.style.display = "block";
  
//     // Reset the value inside the text box
//     reset.addEventListener("click", function(){
//         inputElement.value = "";
//         reset.style.display = "none";
//         output.style.display = "none";
//         document.querySelector("#output-label").style.display = "none";
//     });
// });




