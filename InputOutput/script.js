let inputElement = document.getElementById("input");
let output = document.querySelector("#output");

//change top margin
inputElement.addEventListener("keydown", function() {
    document.querySelector(".container").style.marginTop = "5rem";
});

//random word generator
//make arrays for each letter/sound
const newWordList = [
    {
        match: "a",
        words: ['arrogant', 'agency', 'anniversary', 'abnormal', 'apathy', 'agriculture', 'ambiguous', 'average', 'architecture', 'artificial', 'app', 'ant', 'and', 'aloe', 'abyss', 'arson', 'agony', 'aging', 'ankle', 'alien']
    },
    {
        match: "b",
        words: ['bench', 'bark', 'bed', 'bubble', 'blonde', 'boot', 'bronze', 'building', 'biscuit', 'blackmail', 'bop', 'bee', 'babe', 'bald', 'bats', 'baby', 'broth', 'blink', 'buddy', 'belly']
    },
    {
        match: "d",
        words: ['dollar', 'door', 'disagree', 'disappointment', 'driver', 'depression', 'diagram', 'day', 'dragon', 'divorce', 'dew', 'doctor', 'dime', 'drum', 'duck', 'deaf', 'dirt', 'data', 'demons', 'dusty']
    },
    {
        match: "e",
        words: ['elbow', 'effective', 'echo', 'emphasis', 'explode', 'essay', 'eagle', 'endorse', 'energy', 'economics','egg', 'era', 'earth', 'evil', 'eraser', 'eat', 'enemy', 'event', 'eyelid', 'exotic']
    },
    {
        match: "g",
        words: ['gutter', 'gossip', 'galaxy', 'glove', 'governor', 'grass', 'glow', 'graduate', 'girl', 'gold', 'gym', 'grapes', 'garage', 'goose', 'gravy', 'ghost', 'glitch', 'garnish', 'goblin', 'garden']
    },
    {
        match: "i",
        words: ['indoor', 'investigation', 'integrity', 'image', 'infect', 'illness', 'indulge', 'infinite', 'ignore', 'injury', 'icy', 'item', 'information', 'impact', 'issue', 'iguana', 'iconic', 'ingest', 'insult', 'illiterate']
    },
    {
        match: "j",
        words: ['job', 'jealous', 'jail', 'jewel', 'jump', 'jacket', 'justify', 'joy', 'jaw', 'joke', 'jeep', 'jazz', 'jeans', 'juice', 'jellyfish', 'jaywalk', 'jackpot', 'justice', 'jog', 'jetski']
    },
    {
        match: "l",
        words: ['landscape', 'lose', 'log', 'abnormal', 'lecture', 'laundry', 'liability', 'lazy', 'light', 'lawyer', 'low', 'log', 'lime', 'livid', 'leaf', 'loser', 'liver', 'lucky', 'lizard', 'lethal']
    },
    {
        match: "m",
        words: ['moon', 'meat', 'motif', 'meadow', 'mosquito', 'major', 'marriage', 'message', 'market', 'momentum', 'map', 'mole', 'milk', 'musty', 'moose', 'melon', 'mango', 'math', 'muddy', 'mayhem']
    },
    {
        match: "n",
        words: ['nail', 'night', 'necklace', 'nature', 'needle', 'negative', 'nap', 'nose', 'neighborhood', 'nuclear', 'nosy', 'numb', 'normal', 'nine', 'needy', 'niche', 'noise', 'newbie', 'noodle', 'nugget']
    },
    {
        match: "o",
        words: ['occupation', 'onion', 'orchestra', 'orbit', 'overwhelmed', 'office', 'opinion', 'offend', 'old', 'original', 'off', 'one', 'order', 'other', 'often', 'opaque', 'outfit', 'object', 'online', 'ocean']
    },
    {
        match: "q",
        words: ['quiet', 'queen', 'quality', 'qualification', 'question', 'quit', 'quota', 'quote', 'quest', 'quarter', 'quack', 'quail', 'quick', 'queasy', 'quirky', 'quarter', 'quiz', 'quantity', 'quartet', 'quarantine']
    },
    {
        match: "r",
        words: ['radio', 'rice', 'resign', 'routine', 'rock', 'right', 'rhythm', 'rational', 'restaurant', 'rob', 'red', 'run', 'rave', 'rich', 'remix', 'rabbit', 'reflex', 'regret', 'rhythm', 'resume']
    },
    {
        match: "u",
        words: ['useful', 'unit', 'understanding', 'umbrella', 'urgent', 'unpleasant', 'user', 'unique', 'unlikely', 'unfortunate', 'arrogant', 'undo', 'unfit', 'unite', 'ultra', 'unusual', 'upset', 'uterus', 'unpaid', 'unfair']
    },
    {
        match: "v",
        words: ['volcano', 'volume', 'vegetarian', 'value', 'verdict', 'virus', 'valley', 'visual', 'voice', 'valid', 'van', 'vegetable', 'viper', 'vinyl', 'vague', 'valid', 'villain', 'velvet', 'vulgar', 'verify']
    },
    {
        match: "w",
        words: ['warm', 'willpower', 'weak', 'witch', 'welcome', 'winner', 'waiter', 'worm', 'witness', 'wine', 'web', 'wart', 'white', 'woke', 'walk', 'work', 'worst', 'waste', 'walrus', 'wiggle']
    },
    {
        match: "y",
        words: ['year', 'young', 'yes', 'yourself', 'yellow', 'yeast', 'yard', 'yarmulke', 'yolk', 'yikes', 'yawn', 'you', 'yarn', 'yodel', 'youth', 'yacht', 'yell', 'yawn', 'yardstick', 'yield']
    },
    {
        match: "z",
        words: ['zebra', 'zero', 'zone', 'zucchini', 'zap', 'zine', 'zoom', 'zesty', 'zoo', 'zigzag', 'zombie', 'zinger', 'zipper', 'zealous', 'zookeeper']
    },
    {
        match: "t",
        words: ['to', 'tag', 'table', 'talk', 'typography', 'twig', 'trace', 'truth', 'triangle', 'truck', 'temptation', 'tiger', 'trouble', 'tax', 'trout', 'thumb', 'tool', 'taboo', 'toxic']
    },
    {
        match: "th",
        words: ['the', 'that', 'therapy', 'thought', 'thin', 'thick', 'thirteen', 'thumb', 'things', 'theory', 'throw', 'throne', 'through', 'think', 'thankful']
    },
    {
        match: "p",
        words: ['pop', 'premium', 'pyramid', 'paper', 'private', 'plastic', 'personality', 'pedestrian', 'pocket', 'pie', 'protect', 'paint', 'pot', 'pear', 'pavement', 'pork', 'poetry', 'pink', 'plumbing', 'pool', 'poor', 'portfolio']
    },
    {
        match: "s",
        words: ['skin', 'second', 'student', 'sound', 'scenario', 'soup', 'sour', 'symbol', 'shy', 'snack', 'so', 'salad', 'sea', 'sofa', 'swamp', 'shoe', 'sing', 'sick', 'snake', 'shirt']
    },
    {
        match: "f",
        words: ['failure', 'flex', 'fish', 'friend', 'firefighter', 'floor', 'fever', 'feminist', 'forbid', 'family', 'film', 'fast', 'fox', 'frat', 'feud', 'fork', 'famous', 'free', 'fetus', 'fungi', 'funky', 'fruit', 'final', 'fight', 'flavor', 'future', 'flamingo', 'freeway', 'fatal', 'frantic', 'forever', 'fragrant']
    },
    {
        match: "h",
        words: ['heavy', 'herb', 'hospital', 'hip', 'horse', 'highway', 'harmony', 'husband', 'haircut', 'hold', 'hello', 'help', 'hot', 'hat', 'hashbrowns', 'hint', 'heart', 'hurt', 'hour', 'hungry', 'hiccup', 'herbal', 'heaven', 'hazard', 'healthy', 'horror', 'handbag', 'hideous', 'hostile', 'hygine']
    },
    {
        match: "k",
        words: ['kidney', 'killer', 'knee', 'kitchen', 'king', 'kick', 'key', 'kaleidoscope', 'kettle', 'kindergarden', 'keep', 'kale', 'know', 'kiss', 'kayak', 'karma', 'koala', 'kiosk', 'kitsch']
    },
    {
        match: "c",
        words: ['camera', 'cat', 'committee', 'cup', 'cow', 'crime', 'cash', 'climb', 'capitalist', 'cake', 'coffee','crystal', 'cash', 'cigarette', 'chaos', 'colorful', 'cerulean', 'crusty', 'couch', 'cowboy', 'cereal', 'casual', 'circus', 'cherry', 'cousin', 'crisis']
    },
    {
        match: "ch",
        words: ['check', 'chiropracter', 'challenge', 'chicken', 'chemistry', 'chocolate', 'cheese', 'chives', 'chip', 'chilly', 'chosen', 'church', 'change', 'chlorine']
    },
    {
        match: "sh",
        words: ['sharp', 'shellfish', 'shirt', 'share', 'shop', 'shame', 'short', 'sheep', 'shocked', 'shoe', 'shallow', 'ship', 'shape', 'shadow', 'shmooze', 'shrink', 'shake', 'shift', 'shoulder']
    },
];

const cache = {
    lastMatchedLetter: null,
    shownWords: []
};

//listen for input, convert textbox value to array of words
inputElement.addEventListener("input", (event) => {
    //show clear button
    document.getElementById("clear").removeAttribute("hidden");
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
 



