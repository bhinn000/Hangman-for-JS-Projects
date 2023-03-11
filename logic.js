var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

//Element
let mistakeCount
let randomWord;
let guessingWord;
let guessedWord;
keyboard=document.querySelector('#keyboard')
hangmanPic=document.querySelector('#hangmanPic')
wordSpotlight=document.querySelector('#wordSpotlight')
remove=document.querySelector('.remove')
body=document.querySelector('body')
// reset1=document.querySelector('.btn-info')

//init
const reset=function(){
	mistakeCount=0
	guessingWord=[]	
	wordSpotlight.classList.remove('hide')
	keyboard.classList.remove('hide')
	randomWordFx()
	alphaDisplayed();
	//blank space at begining
	wordSpotlight.innerHTML= randomWord.split('').map(e=>"_").join(" ")
	body.style.backgroundColor="white";
	hangmanPic.src='./0.jpg';
}

reset();

//hangman picture
function updateHangmanPicture(){
	hangmanPic.src='./' + mistakeCount + '.jpg';
    console.log('./' + mistakeCount + '.jpg')
}

//given word
function randomWordFx(){
	randomProgrammingLang=Math.floor(Math.random() * programming_languages.length)
	randomWord=programming_languages[Math.floor(randomProgrammingLang)]
	console.log(randomWord)
	return randomWord
}

//display keys
function alphaDisplayed(){
	alphaKey="abcdefghijklmnopqrstuvwxyz".split("").map(alph=>
		`<button class="btn bg-blue-500 m-1  px-4 py-2 rounded-sm text-lg text-white" 
		id='`+alph+`'>
		`+alph+`
		</button>`).join("")
	keyboard.innerHTML=alphaKey;
}

//wordSpotLight
function displayWord(){
	wordStatus = randomWord.split('').map(x=>guessingWord.includes(x)?x:"_").join("");
	console.log("I am word " + wordStatus)
	
}

//If won
function checkIfWon(){
	if(wordStatus=== randomWord){
		wordSpotlight.textContent = "You won";
		body.style.backgroundColor="green";
		keyboard.classList.add('hide')
		remove.textContent="Wow!"
	}
}

// if Lose
function checkIfLose(){
		wordSpotlight.classList.add('hide')
		keyboard.classList.add('hide')
		wordSpotlight.textContent = "You won";
		body.style.backgroundColor="red"
		remove.textContent="The answer was " + randomWord
		console.log("You lose!")
}

//ifmistake and if lose
function ifMistake(aKey){
	if(mistakeCount<6 ){
		theKey=aKey.textContent.trim()
		guessingWord.push(theKey)


		//  if(guessingWord.slice(-1)!=="Reset"){
		// 	mistakeCount=mistakeCount
		// }

		if(!randomWord.includes(guessingWord.slice(-1))){
			console.log("Slicing " + guessingWord.slice(-1))
			mistakeCount++;
			
		}

		
		else{
			displayWord();
			document.getElementById('wordSpotlight').innerHTML = wordStatus;
			checkIfWon();	
		}

	}

	if(mistakeCount===6){
		checkIfLose();		
	}

	
}

// /guessing word + checking the guessed word + blanked place replaced
const allKeys=document.querySelectorAll('.btn');
allKeys.forEach((aKey)=>{
	aKey.addEventListener('click',function(){
		// displayWord();
		ifMistake(aKey);
		updateHangmanPicture();
	})
})

// reset1.addEventListener('click',init)







	
  































































