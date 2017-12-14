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
		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			console.log('Black WINS');
		}
		else if(checkDiagWinner2(coords[0], coords[1], 'blackClicked')){
			console.log('Black WINS');
		}
		else if(checkHorzWinner(coords[0], coords[1], 'blackClicked')){
		//black won, update DOM appropriately, remove event listeners, etc
			console.log('Black WINS');
		}
		else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			//black won, update DOM appropriately, remove event listeners, etc
			console.log('Black WINS');
		}

	} else{
		this.style.backgroundColor = "red";
		this.classList.add("redClicked");
		this.removeEventListener('click', colClicked);
		console.log('red clicked');
		if (checkDiagWinner(coords[0], coords[1], 'redClicked')){
			//red won, update DOM appropriately, remove event listeners, etc
			console.log('RED WINS');
		}
		else if (checkDiagWinner2(coords[0], coords[1], 'redClicked')){
			//red won, update DOM appropriately, remove event listeners, etc
			console.log('RED WINS');
		}
		else if (checkHorzWinner(coords[0], coords[1], 'redClicked')){
			console.log('red wins');
		}
		else if (checkVertWinner(coords[0], coords[1], 'redClicked')){
			console.log('red wins')
		}
	}
}
var checkVertWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum;
	var j = colNum;

	while (i < 6 && count < 4){
		console.log('vertcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
		}
		else{
			break;
		}
	}

	i = rowNum - 1;

	while(i >= 0 && count < 4){
		console.log('neg vertcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
		}
		else{
			break;
		}
	}
	console.log('vertCount was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}

var checkHorzWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum;
	while (j < 7 && count < 4){
		console.log('vertcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			j++;
		}
		else{
			break;
		}
	}

	j = colNum - 1;

	while (j >= 0 && count <4){
		console.log('vertcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			j--;
		}
		else{
			break;
		}
	}
	console.log('horzCount was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}
var checkDiagWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 
// diagonal check is down to the right
	while (i < 6 && j < 7 && count < 4){
		console.log('diagcheck (+)loop rowNumi, colNumj ==', i, j);
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
	i = Number(rowNum) - 1;
	j = Number(colNum) - 1;
	console.log('entering negtaive check', i, j);

// diagonal check up to the left

	while (i >= 0 && j >= 0 && count < 4){
		console.log('diagcheck (-)loop rowNumi, colNumj ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j--;
		}
		else {
			break;
		}
	}
	console.log('diagcount was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}


var checkDiagWinner2 = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 
	 // diagonal2 check down to the left = subtract row, add col
	while (i >= 0  && j < 7  && count < 4){
		console.log('diag 2 positve loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j++;
		}
		else {
			break;
		}
	}
// reset original click row and column position
	i = Number(rowNum) + 1;
	j = Number(colNum) - 1;

//  diagonal2 check down to the left = add row, sub col
	while (i < 6 && j >= 0 && count < 4){
		console.log('diag 2 negative loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
			j--;
		}
		else {
			break;
		}
	}
	console.log('diag2 count was', count);
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













