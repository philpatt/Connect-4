// CONNECT 4 !
document.addEventListener("DOMContentLoaded", function(){
	var winner = document.getElementById('winner');
	var draw = document.getElementById('draw');
	var col = document.getElementsByClassName('col');
	// var rules = document.getElementById('rules');
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
// add click ability 
var addStartEventListener = function(){
	$('.container').addClass('animated rubberBand');
	$('.header').addClass('animated rubberBand')
	$('#draw').css("display", "none");
	$('#winner').css("display", "none");
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
		$(targetElem).addClass('animated tada');
		targetElem.classList.add("blackClicked");
		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener(coords[0], coords[1]);
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('Black WINS DIAG');
		}
		else if(checkDiagWinner2(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener(coords[0], coords[1]);
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('Black WINS DIAG2');
		}
		else if(checkHorzWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('Black WINS HORZ');
		}
		else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('Black WINS VERT');
		}
	} 
	else{
		targetElem.style.backgroundColor = "red";
		$(targetElem).addClass('animated tada');
		targetElem.classList.add("redClicked");
		console.log('red clicked');
		if (checkDiagWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red'; 
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('RED WINS DIAG');
		}
		else if (checkDiagWinner2(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('RED WINS DIAG2');
		}
		else if (checkHorzWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('red wins HORZ');
		}
		else if (checkVertWinner(coords[0], coords[1], 'redClicked')){
			winner.style.display = 'inline-block';
			winner.style.color = 'red';
			$('#winner').addClass("animated bounceInDown");
			removeColEventListener();
			$('.container').removeClass('animated rubberBand');
			$('.header').removeClass('animated rubberBand');
			console.log('red wins VERT')
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