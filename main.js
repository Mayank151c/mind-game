var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {

	//generates random number between 0 - 4
	var randomNumber = Math.floor(Math.random()*4);

	//now random color is chosen w.r.t. randomNumber generated
	var randomChosenColor = buttonColor[randomNumber];

	//to blink the random chosen color
	$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

	//play sound of respective random chosen color
	playSound(randomChosenColor);
	gamePattern.push(randomChosenColor);
}

function playSound(srcColor) {
	var audio = new Audio("sounds/" + srcColor + ".mp3");
	setTimeout(function() {
		audio.play();
	},100);
}