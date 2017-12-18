// CONNECT 4 !

document.addEventListener("DOMContentLoaded", function(){
	var winner = document.getElementById('winner');
	var draw = document.getElementById('draw');
	var col = document.getElementsByClassName('col');
	addStartEventListener();

	// reset game
	draw.addEventListener('click', function(){
	$('.col').css('backgroundColor', 'white');
	$('.col').removeClass('redClicked');
	$('.col').removeClass('blackClicked');
	$('.col').removeClass('animated tada');
	addStartEventListener(colClicked);
	turn=0;
	count=0;
	})
	winner.addEventListener('click', function(){
		$('.col').css('backgroundColor', 'white');
		$('.col').removeClass('redClicked');
		$('.col').removeClass('blackClicked');
		$('.col').removeClass('animated tada');
		addStartEventListener(colClicked);
		turn=0;
		count=0;
	})
})
var col = document.getElementsByClassName('col');
turn = 0;
var count;
// add click ability to start game and animations
var addStartEventListener = function(){
	$('body').addClass('animated rubberBand');
	$('#draw').css("display", "none");
	$('#winner').css("display", "none");
	console.log('game start');
	for(var i = 0; i < col.length; i++){
		col[i].addEventListener('click', (colClicked));
	}
}

// check for win scenarios of clicked selection
var colClicked = function(){
	turn++;

	// parsing row/col to create coordinates from selected move
	var coords = this.id.replace('row', '').replace('col', '');
	console.log('original coords', coords);

	// redefining coords to introduce falldown function
	coords = fallDown(coords[0], coords[1]) + coords[1]; 
	console.log('fallen coords', coords);

	// remove event listeners of coords selected
	removeSingleEventListener(coords[0], coords[1]);

	// target element is selected move
	var targetElem = document.getElementById("row" + coords[0] + "col" + coords[1]);
	
	// check for draw scenario based on turn and count
	if (turn > 13 && count < 4){
		draw.style.display = 'inline-block';
		$('#draw').addClass("animated bounceInDown");
		$('body').removeClass('animated rubberBand');
		console.log('DRAW and count is ', count);
	}

// if turn is divisible by 2 this player goes and runs through each win scenario
// removes start of game animation classes so they can be activated again
	if(turn%2 === 0){
		targetElem.style.backgroundColor = "black";
		$(targetElem).addClass('animated tada');
		targetElem.classList.add("blackClicked");
		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener(coords[0], coords[1]);
			$('body').removeClass('animated rubberBand');
		}
		else if(checkDiagWinner2(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener(coords[0], coords[1]);
			$('body').removeClass('animated rubberBand');
		}
		else if(checkHorzWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
		else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
	} 
	// if turn is NOT divisible by 2 this player goes and runs through each win scenario
	// removes start of game animation classes so they can be activated again
	else{
		targetElem.style.backgroundColor = "red";
		$(targetElem).addClass('animated tada');
		targetElem.classList.add("redClicked");
		if (checkDiagWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red'; 
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
		else if (checkDiagWinner2(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
		else if (checkHorzWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
		else if (checkVertWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('body').removeClass('animated rubberBand');
		}
	}
}
// this is creating the actual game play where moves start from the bottom and go up
// after row is parsed from being cell being, row is determined to be "i"
// while i is less than g, and has not been assigned a class of playerclicked = increment i
// return if i <=0 is true i = 0, if its false i = i -  1

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
// removes the event listener from the selected move, so the move cannot be changed. 
var removeSingleEventListener = function(rowNum, colNum){
	console.log('removing row' + rowNum + "col" + colNum + "'s event listener");
	document.getElementById("row" + rowNum + "col" + colNum).removeEventListener('click', colClicked);
}
// this is to remove all event listeners from the board after the game has ended.
var removeColEventListener = function(){
	console.log('game end');
	for(var i = 0; i < col.length; i++){
		col[i].removeEventListener('click', colClicked);
	}
}