// winning functions of 'Connect 4!'


// checks North and South win conditions

var checkDraw =

var checkVertWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum;
	var j = colNum;


// Checks North to South
	while (i < 6 && count < 4){
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i++;
		}
		else{
			break;
		}
	}

	i = rowNum - 1;

// Checks South to North
	while(i >= 0 && count < 4){
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			
		}
		else{
			break;
		}
	}

	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}

// checks East/West wins
var checkHorzWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum;
// Checks win conditions West to East
	while (j < 7 && count < 4){
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			j++;
		}
		else{
			break;
		}
	}

	j = colNum - 1;
// checks win conditions East to West
	while (j >= 0 && count <4){

		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			j--;
		}
		else{
			break;
		}
	}

	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}
// checks to see if win combo in NW/SE direction
var checkDiagWinner = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 

	// checks SE win condition

	while (i < 6 && j < 7 && count < 4){

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
// checks NW win condition
	while (i >= 0 && j >= 0 && count < 4){
		if(document.getElementById('row' + i + 'col' + j).classList.contains(turnPlayer)){
			count++;
			i--;
			j--;
		}
		else {
			break;
		}
	}

	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}

// second diagonal check. this function checks if there are any wins going NE and SW.
var checkDiagWinner2 = function(rowNum, colNum, turnPlayer){
	var count = 0;
	var i = rowNum; 
	var j = colNum; 
// checks NE win condition
	while (i >= 0  && j < 7  && count < 4){

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

// checks SE win conditions
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
	if(count >= 4){
		return true;
	}
	else {
		return false;
	}
}