// CONNECT 4 !
document.addEventListener("DOMContentLoaded", function(){


	var winner = document.getElementById('winner');
	// var startRow = document.getElementById('row5');
	addStartEventListener();

})


var col = document.getElementsByClassName('col');
// var rowA = document.getElementsByClassName('rowA');
turn = 0;

var addStartEventListener = function(){
	console.log('game start');
	for(var i = 0; i < col.length; i++){
		col[i].addEventListener('click', (colClicked));
	}
}

var colClicked = function(){
	turn++;
	var coords = this.id.replace('row', '').replace('col', '');
	console.log('original coords', coords);
	coords = fallDown(coords[0], coords[1]) + coords[1];
	console.log('fallen coords', coords);
	removeSingleEventListener(coords[0], coords[1]);
	var targetElem = document.getElementById("row" + coords[0] + "col" + coords[1]);

	if(turn%2 === 0){
		targetElem.style.backgroundColor = "black";
		targetElem.classList.add("blackClicked");
		
		// console.log('black clicked');
		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener(coords[0], coords[1]);
			console.log('Black WINS DIAG');
		}
		else if(checkDiagWinner2(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener(coords[0], coords[1]);
			console.log('Black WINS DIAG2');
		}
		else if(checkHorzWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener(coords[0], coords[1]);
			console.log('Black WINS HORZ');
		}
		else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener(coords[0], coords[1]);
			console.log('Black WINS VERT');
		}
	} else{
		targetElem.style.backgroundColor = "red";
		targetElem.classList.add("redClicked");
		console.log('red clicked');
		if (checkDiagWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red'; 
			removeColEventListener();
			console.log('RED WINS');
		}
		else if (checkDiagWinner2(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			removeColEventListener();
			console.log('RED WINS');
		}
		else if (checkHorzWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			removeColEventListener();
			console.log('red wins');
		}
		else if (checkVertWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			removeColEventListener();
			console.log('red wins')
		}
	}
}



var fallDown = function(rowNum, colNum){
	var i = rowNum;
	console.log('fallDown', rowNum, colNum);
	console.log('row' + i + 'col' + colNum);


	while (i < 6 && !document.getElementById('row' + i + 'col' + colNum).classList.contains('redClicked') &&
		!document.getElementById('row' + i + 'col' + colNum).classList.contains('blackClicked')){
		console.log('check clicked', i);
		i++;		
	}
	console.log('i - 1', i - 1);
	return i <= 0 ? 0 : i - 1;
}

var removeSingleEventListener = function(rowNum, colNum){
	console.log('removing row' + rowNum + "col" + colNum + "'s event listener");
	document.getElementById("row" + rowNum + "col" + colNum).removeEventListener('click', colClicked);
}

var removeColEventListener = function(){
	console.log('game end');
	for(var i = 0; i < col.length; i++){
		col[i].removeEventListener('click', colClicked);
	}
}

var checkVertWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum;
	var j = colNum;
	while (i < 6 && count < 4){
		// console.log('vertcheck loop row, col == ', i, j);
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
		// console.log('neg vertcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
		}
		else{
			break;
		}
	}
	// console.log('vertCount was', count);
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
		// console.log('horzcheck loop row, col == ', i, j);
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
		// console.log('horzcheck loop row, col == ', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			j--;
		}
		else{
			break;
		}
	}
	// console.log('horzCount was', count);
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
		// console.log('diagcheck (+)loop rowNumi, colNumj ==', i, j);
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
	// console.log('entering negtaive check', i, j);
// diagonal check up to the left
	while (i >= 0 && j >= 0 && count < 4){
		// console.log('diagcheck (-)loop rowNumi, colNumj ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j--;
		}
		else {
			break;
		}
	}
	// console.log('diagcount was', count);
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
		// console.log('diag 2 positve loop i, j ==', i, j);
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
		// console.log('diag 2 negative loop i, j ==', i, j);
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
			j--;
		}
		else {
			break;
		}
	}
	// console.log('diag2 count was', count);
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}