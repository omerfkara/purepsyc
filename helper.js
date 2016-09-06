function init(){
	player1='';
	player2='';
	player1score=0;
	player2score=0;
	cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	//cards = ["Q", "K", "A"];
	card="";
	player1id="";
	player2id="";
}

function getPlayCard(){
	sleep.sleep(2);

	if(cards.length==0){
		//cards = ["Q", "K", "A"];
		cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		io.to(player2id).emit('reset', 's');
		io.to(player1id).emit('reset', 'h');
	}
	card=cards[Math.floor(Math.random()*cards.length)];
	var index = cards.indexOf(card);
	if (index > -1) {
		cards.splice(index, 1);
	}
	return card;
}

function gameengine(){
			if(getPoints(player1)>getPoints(player2))
			{
				player1score=player1score+getPoints(card);
			}
			
			if(getPoints(player2)>getPoints(player1))
			{
				player2score=player2score+getPoints(card);
			}
			io.to(player1id).emit('playerScore', player1score);
			io.to(player1id).emit('opponentScore', player2score);
			io.to(player2id).emit('playerScore', player2score);
			io.to(player2id).emit('opponentScore', player1score);
}

function getPoints(s){

//	switch (s.substr(2,s.length)) {
	switch (s) {
		case "2":
			q = 2;
			break;
		case "3":
			q = 3;
			break;
		case "4":
			q = 4;
			break;
		case "5":
			q = 5;
			break;
		case "6":
			q = 6;
			break;
		case "7":
			q = 7;
			break;
		case "8":
			q = 8;
			break;
		case "9":
			q = 9;
			break;
		case "10":
			q = 10;
			break;
		case "J":
			q = 11;
			break;
		case "Q":
			q = 12;
			break;
		case "K":
			q = 13;
			break;
		case "A":
			q = 14;
			break;
	}
	return q; 
}