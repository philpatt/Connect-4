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
	turn++;
	var coords = this.id.replace('row', '').replace('col', '');
	if(turn%2 === 0){
		this.style.backgroundColor = "black";
		this.className += " blackClicked"
		this.removeEventListener('click', colClicked);
		var player = 'black';

		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			//red won, update DOM appropriately, remove event listeners, etc
			console.log('Black WINS');
		}
	} else{
		this.style.backgroundColor = "red"
		this.classList.add("redClicked");
		this.removeEventListener('click', colClicked);
		var player = 'red';
		if(checkDiagWinner(coords[0], coords[1], 'redClicked')){
			//red won, update DOM appropriately, remove event listeners, etc
			console.log('RED WINS');
		}
	
	}

}

// to do
// horizontal and vertical
var checkVertWinner = function (){

}

var checkHorizWinner = function(){

}



var checkDiagWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 
// diagonal check is down to the right
	while (i < 6 && j < 7 && count < 4){
		console.log('positve loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
			j++;
		}
		else {
			break;
		}
	}
// reset row and column position

	i = rowNum - 1;
	j = colNum - 1;

// diagonal check up to the left
	while (i >= 0 && j >= 0 && count < 4){
		console.log('negative loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j--;
		}
		else {
			break;
		}
	}
	console.log('count was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}

 // diagonal2 (up to the right) = subtract row, add col

var checkDiagWinner2 = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 
	
	while (i < 6 && j < 7 && count < 4){
		console.log('positve loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j++;
		}
		else {
			break;
		}
	}

// reset row and column position

	i = rowNum - 1;
	j = colNum - 1;

//  (down to the left) = add row, sub col

	while (i >= 0 && j >= 0 && count < 4){
		console.log('negative loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
			j--;
		}
		else {
			break;
		}
	}
	console.log('count was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}




document.addEventListener("DOMContentLoaded", function(){

	addColEventListener();
})













