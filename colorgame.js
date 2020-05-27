var squaresgen=6;
var colors=getRandomcolors(squaresgen);
var colorsel=document.getElementById("ColorSelected");
var squares = document.querySelectorAll(".square");
var message=document.querySelector("#message");
var pickedColor=pickcolor();
var h1=document.querySelectorAll("h1");
var button=document.querySelector("#choice");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var expertbtn=document.querySelector("#expertbtn");
colorsel.textContent=pickedColor;
for(var i=0;i < squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor =this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor === pickedColor){
			message.textContent="Correct!! :)";
			for(i=0;i<squares.length;i++){
				squares[i].style.backgroundColor=pickedColor;
			}
			h1[0].style.backgroundColor=pickedColor;
			button.textContent="Play Again???"
		}
		else{
			this.style.backgroundColor="#151e1e";
			message.textContent="Try again :(";
		}
	});
}
function pickcolor(){
	var randomnum=Math.floor(Math.random()*colors.length);
	return colors[randomnum];
}
function getRandomcolors(num){
	var arr = []
	for(var i = 0; i < num; i++){
	arr.push(randomcolor());
	console.log(arr[i]);
}
	return arr;
}
function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
button.addEventListener("click",function(){
	colors=getRandomcolors(squaresgen);
	pickedColor=pickcolor();
	colorsel.textContent=pickedColor;
	this.textContent="Want New Colors??"
	for(i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1[0].style.backgroundColor="#ff9933";
	message.textContent=" ";
});
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	expertbtn.classList.remove("selected");
	squaresgen=3;
	colors=getRandomcolors(squaresgen);
	pickedColor=pickcolor();
	colorsel.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor= colors[i];
	}
	else{
		squares[i].style.display="none";
	}
}
});
hardbtn.addEventListener("click",function(){
		easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	expertbtn.classList.remove("selected");
	squaresgen=4;
	colors=getRandomcolors(squaresgen);
	pickedColor=pickcolor();
	colorsel.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			if(i==3){
				squares[i].style.display="block";
			}
		squares[i].style.backgroundColor= colors[i];
	}
	else{
		squares[i].style.display="none";
	}
}
});
expertbtn.addEventListener("click",function(){
		easybtn.classList.remove("selected");
	hardbtn.classList.remove("selected");
	expertbtn.classList.add("selected");
	squaresgen=6;
	colors=getRandomcolors(squaresgen);
	pickedColor=pickcolor();
	colorsel.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor= colors[i];
		squares[i].style.display="block";
}
});