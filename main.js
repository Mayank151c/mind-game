var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var indexCheck = 0;
var level = 0;

function nextSequence() {

	//generates random number between 0 - 4
	var randomNumber = Math.floor(Math.random()*4);

	//now random color is chosen w.r.t. randomNumber generated
	var randomChosenColor = buttonColor[randomNumber];

	//play sound of respective random chosen color
	playSound(randomChosenColor);

	//change text of level
	$("h1").text("Level "+(++level));

	gamePattern.push(randomChosenColor);

	//to blink the random chosen color
	$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}


$(".btn").click(function () {

	//select the id attributes of respective color
	var userChosenColor = $(this).attr("id");

	// store the user clicked pattern
	userClickedPattern.push(userChosenColor);

	//checks the user input is correct or not
	if(userChosenColor!=gamePattern[indexCheck]) {
		gameOver();
		var audio = new Audio("sounds/wrong.mp3");
		audio.play();
	}
	else {
		playSound(userChosenColor);

		//animation of pressing button
		animatePress(userChosenColor);

		indexCheck++;
		if(indexCheck == gamePattern.length)
		{
			setTimeout(function() {
				nextGamePlay();
			},800);
		}
	}
});


function playSound(srcColor) {
	var audio = new Audio("sounds/" + srcColor + ".mp3");

	//to synchronize sound and animation together
	setTimeout(function() {
		audio.play();
	},10);
}


function animatePress(currentColor) {
	$("#"+currentColor).addClass("pressed");
	setTimeout(function() {
	 	$("#"+currentColor).removeClass("pressed")
	},100);
}


function gameOver() {
	gamePattern = [];
	userClickedPattern = [];
	level = 0;
	indexCheck = 0;

	$("h1").text("Game over press any key to restart");
	
	//animation for game over
	$("body").css("background","red");

	setTimeout(function() {
		$("body").css("background","#011F3F");
	},100);
}


function nextGamePlay() {
	nextSequence();
	indexCheck = 0;
}


$(document).keypress(function() {
	if(level==0) {
		setTimeout(function() {
			nextGamePlay();
		},50)
	}
 });