
var col = document.getElementsByClassName('col');
var player1Position =[];
var player2Position = [];
turn = 0;





var addColEventListener = function(){
	console.log('eventlisteners engaged');
	for(var i = 0; i < col.length; i++){
		col[i].addEventListener('click', colClicked);
	}
}
var colClicked = function(){
	var player;
	// checkWinner();
	turn++;
	if(turn%2 === 0){
		this.style.backgroundColor = "black";
		this.removeEventListener('click', colClicked);
		var player = 'player2';	

	} else{
		this.style.backgroundColor = "red"
		this.removeEventListener('click', colClicked);
		var player = 'player1';
	}
}
// var checkWinner = function(){
// 	if () {}

// }











document.addEventListener("DOMContentLoaded", function(){
	addColEventListener();
})