var colors= generateRandomColors(9);
var numSquares=9
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var resetButton= document.getElementById("playAgain");
var heading= document.getElementById("heading");
var easyBtn= document.getElementById("easy");
var mediumBtn= document.getElementById("medium");
var hardBtn= document.getElementById("hard");

easyBtn.addEventListener("click",function(){
	numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
messageDisplay.textContent="";
for( var i=0; i<squares.length; i++)
	{ if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
	}else{
		squares[i].style.display="none";
	}

	}

});

mediumBtn.addEventListener("click",function(){
	numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
messageDisplay.textContent="";
for( var i=0; i<squares.length; i++)
	{ if(colors[i]){

		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";

	}else{
		squares[i].style.display="none";
	}

	}

});

hardBtn.addEventListener("click",function(){
	numSquares=9;
	colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
messageDisplay.textContent="";
for( var i=0; i<squares.length; i++)
	{ 
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";

	}

});

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent= pickedColor;
	for( var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=colors[i];

	}
	heading.style.backgroundColor="pink";
	messageDisplay.textContent="";
	resetButton.textContent="NEW COLORS!"
});

colorDisplay.textContent = pickedColor;


for( var i=0 ; i<squares.length ; i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent="Correct!";
			resetButton.textContent="PLAY AGAIN?";
			changeColors(clickedColor);
			heading.style.backgroundColor=clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){

	var arr = [];
	for( var i=0 ; i<num ; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	 return "rgb(" + r +", "+ g + ", " + b + ")" ;
}