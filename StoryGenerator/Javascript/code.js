'use strict';

	//Reading inputs

const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');
const inputFive = document.getElementById('input5');
const done = document.getElementById('done');

function storyGenerator() {
	let noun = inputOne.value.trim();
	let verb = inputTwo.value.trim();
	let adjective = inputThree.value.trim();
	let verbTwo = inputFour.value.trim();
	let adjectiveTwo = inputFive.value.trim();
	
	document.getElementById("story").style.visibility = "hidden";
	document.getElementById("output").style.visibility = "visible";
	
	if (noun > "0") {
	outputOne.innerText = `${noun}`;
	document.getElementById("outputOne").style.color = "blue";
	}
	if (verb > "0") {
	outputTwo.innerText = `${verb}`;
	document.getElementById("outputTwo").style.color = "blue";
	}
	if (adjective > "0") {
	outputThree.innerText = `${adjective}`;
	document.getElementById("outputThree").style.color = "blue";
	}
	if (verbTwo > "0") {
	outputFour.innerText = `${verbTwo}`;
	document.getElementById("outputFour").style.color = "blue";
	}
	if (adjectiveTwo > "0") {
	outputFive.innerText = `${adjectiveTwo}`;
	document.getElementById("outputFive").style.color = "blue";
	}
}


function reset() {
            document.getElementById("inputWords").reset();
         }
function refresh() {                                                          // I cant get this button to work. Please help me.
            document.getElementById("story").style.visibility = "visible";  
			document.getElementById("output").style.visibility = "hidden";
			
         }





done.addEventListener('click', function() {
storyGenerator();
});

refresh.addEventListener('click', function() {
	refresh();
});

