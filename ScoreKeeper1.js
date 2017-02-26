var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var reset = document.getElementById('reset');
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var gameOver = false;
var winningScore = 5;
var input = document.querySelector('input');
var score = document.getElementById('score');

p1Button.addEventListener('click', function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === winningScore){
		gameOver = true;
		p1Display.classList.add('winning');
	}
	p1Display.textContent = p1Score;
}
});

p2Button.addEventListener('click', function(){
	if(!gameOver){
	p2Score++;
	if(p2Score === winningScore){
		gameOver = true;
		p2Display.classList.add('winning');
	}
	p2Display.textContent = p2Score;
}
});

reset.addEventListener('click', reset1);

input.addEventListener('change', function(){
	winningScore = Number(input.value);
	score.textContent = input.value;
	reset1();
});

function reset1(){
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove('winning');
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove('winning');
	gameOver = false;
};