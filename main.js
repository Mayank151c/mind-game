var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var indexCheck = 0;

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


$(".btn").click(function () {

	//select the id attributes of respective color
	var userChosenColor = $(this).attr("id");

	// store the user clicked pattern
	userClickedPattern.push(userChosenColor);

	//checks the user input is correct or not
	if(userChosenColor!=gamePattern[indexCheck]) {
		var audio = new Audio("sounds/wrong.mp3");
		audio.play();
	}
	else {
		playSound(userChosenColor);

		indexCheck++;
		if(indexCheck == gamePattern.length)
		{
			setTimeout(function() {
				nextSequence();
			},800);
		}
	}
});


function playSound(srcColor) {
	var audio = new Audio("sounds/" + srcColor + ".mp3");
	setTimeout(function() {
		audio.play();
	},100);
}


$(document).keypress(function() {
 		nextSequence();
 });