


// disregard this js file


var colClicked = function(){
	turn++;
	var coords = this.id.replace('row', '').replace('col', '');
	if(turn%2 === 0){
		this.style.backgroundColor = "black";
		this.classList.add("blackClicked");
		console.log('black clicked');
		if(checkDiagWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener();
			console.log('Black WINS DIAG');
		}
		else if(checkDiagWinner2(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener();
			console.log('Black WINS DIAG2');
		}
		else if(checkHorzWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener();
			console.log('Black WINS HORZ');
		}
		else if(checkVertWinner(coords[0], coords[1], 'blackClicked')){
			winner.style.display = 'inline-block';
			removeColEventListener();
			console.log('Black WINS VERT');
		}
	} else{
		this.style.backgroundColor = "red";
		this.classList.add("redClicked");
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