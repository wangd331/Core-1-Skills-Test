let inputElement = document.getElementById("input");
let output = document.querySelector("#output");

//random word generator
//make arrays for each soft consonant/sound
const newWordList = [
    {
        match: "t",
        words: ['to', 'tag', 'table', 'talk', 'typography', 'twig', 'trace', 'truth', 'triangle', 'truck', 'temptation', 'tiger', 'trouble']
    },
    {
        match: "p",
        words: ['pop', 'premium', 'pyramid', 'paper', 'private', 'plastic', 'personality', 'pedestrian', 'pocket', 'pie', 'protect', 'paint']
    },
    {
        match: "s",
        words: ['skin', 'second', 'student', 'sound', 'scenario', 'soup', 'sour', 'symbol', 'shy', 'snack', 'so', 'salad']
    },
    {
        match: "f",
        words: ['failure', 'flex', 'fish', 'friend', 'firefighter', 'floor', 'fever', 'feminist', 'forbid', 'family', 'film', 'fast']
    },
    {
        match: "h",
        words: ['heavy', 'herb', 'hospital', 'hip', 'horse', 'highway', 'harmony', 'husband', 'haircut', 'hold', 'hello', 'help']
    },
    {
        match: "k",
        words: ['kidney', 'killer', 'knee', 'kitchen', 'king', 'kick', 'key', 'kaleidoscope', 'kettle', 'kindergarden', 'keep', 'kale']
    },
    {
        match: "c",
        words: ['camera', 'cat', 'committee', 'cup', 'cow', 'crime', 'cash', 'climb', 'capitalist', 'cake', 'coffee','crystal']
    },
    {
        match: "ch",
        words: ['check', 'chiropracter', 'challenge', 'chicken', 'chemistry', 'chocolate', 'cheese', 'chives', 'chip', 'chilly']
    },
    {
        match: "sh",
        words: ['sharp', 'shellfish', 'shirt', 'share', 'shop', 'shame', 'short', 'sheep', 'shocked', 'shoe']
    },
    {
        match: "th",
        words: ['the', 'that', 'therapy', 'thought', 'thin', 'thick', 'thirteen', 'thumb', 'things', 'theory']
    },
];

const cache = {
    lastMatchedLetter: null,
    shownWords: []
};

//listen for input, convert textbox value to array of words
inputElement.addEventListener("input", (event) => {
    //divide string at spaces and places in an array
    const splitInput = event.target.value.split(" ");
    const lastWord = splitInput[splitInput.length - 1];

    	//ignore - for enhancing website performance
	throttle(
		(() => {
			const similarWord = findSimilarWord(lastWord, newWordList);

			//if the new word begins with the same letter as the previous one, replace the last item in the cache. otherwise, push it to the cache
			if (
				cache.shownWords.length > 0 &&
				cache.shownWords[cache.shownWords.length - 1]?.charAt(0) ===
					similarWord?.charAt(0)
			) {
				cache.shownWords[cache.shownWords.length - 1] = similarWord;
			} else if (typeof similarWord === "string") {
				cache.shownWords.push(similarWord);
			}

			showWord(cache.shownWords.filter((word) => word.length > 0).join(" "));
		})(),
		150
	);
});

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
});

function findSimilarWord(originalWord, dictionary) {
    if (originalWord.length === 0 || typeof originalWord !== "string") {
        //return a blank string if last input is blank (spacebar)
        cache.lastMatchedLetter = null;
        return "";
    }

    for (let i = 0; i < dictionary.length; i++) {
        // create an array from the letters of the word, loop through starting from the beginning of the word, until it finds a match
        for (
            let j = 1, letters = originalWord.split("").slice(0, j);
            j <= originalWord.length;
            j++, letters = originalWord.split("").slice(0, j)
        ) {
            if (
                letters.join("").toLowerCase() === dictionary[i].match &&
                !cache.lastMatchedLetter?.includes(dictionary[i].match)
            ) {
                //saves the matched letter - now it will only output a randomized word after you press space to type a new word or delete the last word
                cache.lastMatchedLetter = dictionary[i].match;
                return getRandomItem(dictionary[i].words);
            }
        }
    }
    //return null if there is a character inputted, but no match. This will make the function showWord() do nothing rather than clearing the suggestion
    return null;
}

//generate random word from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//output randomized word
function showWord(word) {
    if (typeof word !== "string") return;
    document.getElementById("newPhrase").textContent = word;
    output.removeAttribute("hidden");
    //show nothing if there is nothing in the text input
    if (word.length === 0) {
        output.setAttribute("hidden", "");
    }
    //text scrambler from https://github.com/Recidvst/scrambling-letters
    Scrambler({
        target: '#newPhrase',
        random: [500, 1000],
        speed: 100,
      });
}

function showReset() {
    document.getElementById("reset").removeAttribute("hidden");
}

function throttle(func, limit) {
	let lastFunc;
	let lastRan;
	return function throttledFunction(...args) {
		const context = this;
		function run() {
			func.apply(context, args);
			lastRan = Date.now();
		}
		if (!lastRan) {
			if ("requestAnimationFrame" in window) {
				requestAnimationFrame(run);
			} else {
				run();
			}
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(() => {
				if (Date.now() - lastRan >= limit) {
					if ("requestAnimationFrame" in window) {
						requestAnimationFrame(run);
					} else {
						run();
					}
				}
			}, limit - (Date.now() - lastRan));
		}
	};
}
 



