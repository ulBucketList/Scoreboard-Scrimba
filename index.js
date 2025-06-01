let homeScore = 0;
let guestScore = 0;

// Home team scoring functions
function addHome1() {
	homeScore += 1;
	document.getElementById('homeScore').textContent = homeScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

function addHome2() {
	homeScore += 2;
	document.getElementById('homeScore').textContent = homeScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

function addHome3() {
	homeScore += 3;
	document.getElementById('homeScore').textContent = homeScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

// Guest team scoring functions
function addGuest1() {
	guestScore += 1;
	document.getElementById('guestScore').textContent = guestScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

function addGuest2() {
	guestScore += 2;
	document.getElementById('guestScore').textContent = guestScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

function addGuest3() {
	guestScore += 3;
	document.getElementById('guestScore').textContent = guestScore;
	var audio = document.getElementById("Swish");
	audio.play();
}

// thanks for using this template
function reset(){
	homeScore = 0;
	guestScore = 0;
	document.getElementById('homeScore').textContent = homeScore;
	document.getElementById('guestScore').textContent = guestScore;
	var audio = document.getElementById('restart');
	audio.play();


}




