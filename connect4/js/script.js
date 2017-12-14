var col = document.getElementsByClassName('col');
turn = 0;





var addColEventListener = function(){
	console.log('game start');
	for(var i = 0; i < col.length; i++){
		col[i].addEventListener('click', colClicked);
	}
}

var colClicked = function(){
	turn++;
	var coords = this.id.replace('row', '').replace('col', '');

	if(turn%2 === 0){
		this.style.backgroundColor = "black";
		this.classList.add("blackClicked");
		this.removeEventListener('click', colClicked);
		console.log('black clicked');
		checkVertWinner(coords[0], coords[1], 'blackClicked');
		// checkDiagWinner(coords[0], coords[1], 'blackClicked');

		if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			//black won, update DOM appropriately, remove event listeners, etc
			console.log('Black WINS');
		}
		// else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
		// 	console.log('Black WINS');
		// }
	} else{
		this.style.backgroundColor = "red";
		this.classList.add("redClicked");
		this.removeEventListener('click', colClicked);
		console.log('red clicked');
		checkVertWinner(coords[0], coords[1], 'redClicked');
		// checkDiagWinner(coords[0], coords[1], 'redClicked');

		// if (checkDiagWinner(coords[0], coords[1], 'redClicked')){
		// 	//red won, update DOM appropriately, remove event listeners, etc
		// 	console.log('RED WINS');
		// }
		if (checkVertWinner(coords[0], coords[1], 'redClicked')){
			console.log('red wins')
		}

	}
}

var checkVertWinner = function (rowNum, colNum, turnPlayer){
	var vertCount = 0;
	var i = rowNum; 
	var j = colNum;

	while (i < 4 && vertCount < 4){
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			i++;
			vertCount ++;
		}
		else{
			break;
		}
	}
	console.log('vertCount was', vertCount);
	if(vertCount >= 4){
		return true;
	}
	else {
		return false;
	}
}
	




// var checkDiagWinner = function(rowNum, colNum, turnPlayer){
// 	var count = 0;
// 	var i = rowNum; 
// 	var j = colNum; 
// // diagonal check is down to the right
// 	while (i < 6 && j < 7 && count < 4){
// 		console.log('diagcheck (+)loop rowNumi, colNumj ==', i, j);
// 		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
// 			count++;
// 			i++;
// 			j++;
// 		}
// 		else {
// 			break;
// 		}
// 	}
// // reset row and column position

// 	i = rowNum - 1;
// 	j = colNum - 1;

// // diagonal check up to the left
// 	while (i >= 0 && j >= 0 && count < 4){
// 		console.log('diagcheck (-)loop rowNumi, colNumj ==', i, j);
// 		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
// 			count++;
// 			i--;
// 			j--;
// 		}
// 		else {
// 			break;
// 		}
// 	}
// 	console.log('count was', count);
// 	if(count >= 4){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
// var checkDiagWinner2 = function(rowNum, colNum, turnPlayer){
// 	var count = 0;
// 	var i = rowNum; 
// 	var j = colNum; 
// 	 // diagonal2 check up to the right = subtract row, add col
// 	while (i < 6 && j < 7 && count < 4){
// 		console.log('2 positve loop i, j ==', i, j);
// 		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
// 			count++;
// 			i--;
// 			j++;
// 		}
// 		else {
// 			break;
// 		}
// 	}
// // reset original click row and column position
// 	i = rowNum - 1;
// 	j = colNum - 1;
// //  diagonal2 check down to the left = add row, sub col
// 	while (i >= 0 && j >= 0 && count < 4){
// 		console.log('2 negative loop i, j ==', i, j);
// 		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
// 			count++;
// 			i++;
// 			j--;
// 		}
// 		else {
// 			break;
// 		}
// 	}
// 	console.log('count was', count);
// 	if(count >= 4){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

document.addEventListener("DOMContentLoaded", function(){

	addColEventListener();
})













