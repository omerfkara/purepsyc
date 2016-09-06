var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var sleep = require('sleep');
var player1='';
var player2='';
var player1score=0;
var player2score=0;
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var card="";
var player1id="";
var player2id="";
var port= Math.floor(Math.random() * 1000) + 3000


app.get('/jq', function(req, res){
  res.sendFile(__dirname + '/jquery-1.11.1.js');
});
app.get('/sio', function(req, res){
  res.sendFile(__dirname + '/socket.io-1.2.0.js');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/c/h/A', function(req, res){
  res.sendFile(__dirname + '/cards/a_of_hearts.png');
});
app.get('/c/h/K', function(req, res){
  res.sendFile(__dirname + '/cards/k_of_hearts.png');
});
app.get('/c/h/Q', function(req, res){
  res.sendFile(__dirname + '/cards/q_of_hearts.png');
});
app.get('/c/h/J', function(req, res){
  res.sendFile(__dirname + '/cards/j_of_hearts.png');
});
app.get('/c/h/10', function(req, res){
  res.sendFile(__dirname + '/cards/10_of_hearts.png');
});
app.get('/c/h/9', function(req, res){
  res.sendFile(__dirname + '/cards/9_of_hearts.png');
});
app.get('/c/h/8', function(req, res){
  res.sendFile(__dirname + '/cards/8_of_hearts.png');
});
app.get('/c/h/7', function(req, res){
  res.sendFile(__dirname + '/cards/7_of_hearts.png');
});
app.get('/c/h/6', function(req, res){
  res.sendFile(__dirname + '/cards/6_of_hearts.png');
});
app.get('/c/h/5', function(req, res){
  res.sendFile(__dirname + '/cards/5_of_hearts.png');
});
app.get('/c/h/4', function(req, res){
  res.sendFile(__dirname + '/cards/4_of_hearts.png');
});
app.get('/c/h/3', function(req, res){
  res.sendFile(__dirname + '/cards/3_of_hearts.png');
});
app.get('/c/h/2', function(req, res){
  res.sendFile(__dirname + '/cards/2_of_hearts.png');
});
app.get('/c/s/A', function(req, res){
  res.sendFile(__dirname + '/cards/a_of_spades.png');
});
app.get('/c/s/K', function(req, res){
  res.sendFile(__dirname + '/cards/k_of_spades.png');
});
app.get('/c/s/Q', function(req, res){
  res.sendFile(__dirname + '/cards/q_of_spades.png');
});
app.get('/c/s/J', function(req, res){
  res.sendFile(__dirname + '/cards/j_of_spades.png');
});
app.get('/c/s/10', function(req, res){
  res.sendFile(__dirname + '/cards/10_of_spades.png');
});
app.get('/c/s/9', function(req, res){
  res.sendFile(__dirname + '/cards/9_of_spades.png');
});
app.get('/c/s/8', function(req, res){
  res.sendFile(__dirname + '/cards/8_of_spades.png');
});
app.get('/c/s/7', function(req, res){
  res.sendFile(__dirname + '/cards/7_of_spades.png');
});
app.get('/c/s/6', function(req, res){
  res.sendFile(__dirname + '/cards/6_of_spades.png');
});
app.get('/c/s/5', function(req, res){
  res.sendFile(__dirname + '/cards/5_of_spades.png');
});
app.get('/c/s/4', function(req, res){
  res.sendFile(__dirname + '/cards/4_of_spades.png');
});
app.get('/c/s/3', function(req, res){
  res.sendFile(__dirname + '/cards/3_of_spades.png');
});
app.get('/c/s/2', function(req, res){
  res.sendFile(__dirname + '/cards/2_of_spades.png');
});
app.get('/c/c/A', function(req, res){
  res.sendFile(__dirname + '/cards/a_of_clubs.png');
});
app.get('/c/c/K', function(req, res){
  res.sendFile(__dirname + '/cards/k_of_clubs.png');
});
app.get('/c/c/Q', function(req, res){
  res.sendFile(__dirname + '/cards/q_of_clubs.png');
});
app.get('/c/c/J', function(req, res){
  res.sendFile(__dirname + '/cards/j_of_clubs.png');
});
app.get('/c/c/10', function(req, res){
  res.sendFile(__dirname + '/cards/10_of_clubs.png');
});
app.get('/c/c/9', function(req, res){
  res.sendFile(__dirname + '/cards/9_of_clubs.png');
});
app.get('/c/c/8', function(req, res){
  res.sendFile(__dirname + '/cards/8_of_clubs.png');
});
app.get('/c/c/7', function(req, res){
  res.sendFile(__dirname + '/cards/7_of_clubs.png');
});
app.get('/c/c/6', function(req, res){
  res.sendFile(__dirname + '/cards/6_of_clubs.png');
});
app.get('/c/c/5', function(req, res){
  res.sendFile(__dirname + '/cards/5_of_clubs.png');
});
app.get('/c/c/4', function(req, res){
  res.sendFile(__dirname + '/cards/4_of_clubs.png');
});
app.get('/c/c/3', function(req, res){
  res.sendFile(__dirname + '/cards/3_of_clubs.png');
});
app.get('/c/c/2', function(req, res){
  res.sendFile(__dirname + '/cards/2_of_clubs.png');
});
app.get('/s', function(req, res){
  res.sendFile(__dirname + '/style.css');
});
app.get('/j', function(req, res){
  res.sendFile(__dirname + '/script.js');
});
app.get('/b', function(req, res){
  res.sendFile(__dirname + '/background.jpg');
});
app.get('/b2', function(req, res){
  res.sendFile(__dirname + '/redback.png');
});
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
//	sleep(20000);
	console.log('2 saniye bitti');

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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
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

io.on('connection', function(socket){
	var room="room"+Math.floor(Math.random() * 1000) + 1000
	socket.join(room);
    console.log("connected: "+socket.id+" to room:"+room);
	var sid = socket.id;	
	if(sid!=null)
	{
		if(player1id=="")
		{
			player1id=sid;
			io.to(player1id).emit('mesaj', 'Bağlantı sağlandı. Kupa sizin.Diğer oyuncu bekleniyor.');
			console.log('player1id ' + player1id);
		}
		else
		if(player2id=="")
		{
			player2id=sid;
			io.to(player2id).emit('mesaj', 'Bağlantı sağlandı. Maça sizin. Oyun başlıyor');
			io.to(player1id).emit('mesaj', 'Rakip bağlandı. Oyun başlıyor.');
			io.to(player2id).emit('reset', 's');
			io.to(player1id).emit('reset', 'h');
			
			console.log('player2id ' + player2id);
			card=getPlayCard();
			console.log('card ' + card);
			io.emit('game card', card);
			//io.emit('reset','all');
		}
		else
		{
			console.log('yer kalmadı');
			io.to(sid).emit('mesaj', 'Üzgünüm. Geç kaldınız.');

		}
	}
		socket.on('resetserver', function(msg){
			player1id=sid;
			player2id="";
			io.emit('playerScore', 0);
			io.emit('opponentScore', 0);
			io.emit('Rakip oyundan çıktı. Lütfen tekrar bağlanın');
			io.to(sid).emit('Oyun yeniden başlatıldı. Kupa sizin. Rakip bekleniyor.');
		});
		
		
		socket.on('playerPlayCard', function(msg){
		if(sid==player1id)
			{
				console.log('player 1 play card');
				player1=msg;
				if(player2!="")
				{
					io.to(player1id).emit('opponentGameCard', player2);
					console.log('player 2 play card: ' + player2);

					io.to(player2id).emit('opponentGameCard', player1);
					console.log('player 1 play card: ' + player1);

					console.log('2 saniye başladı');
					sleep(2000);
					console.log('2 saniye bitti');
					gameengine();
					card=getPlayCard();
					io.to(player2id).emit('game card', card);
					io.to(player1id).emit('game card', card);
					player1="";
					player2="";
				}
				else
				{
					io.to(player2id).emit('opponentplay','card played')				
				}
			}

		if(sid==player2id)
			{
				console.log('player 2 play card');
				player2=msg;
				if(player1!="")
				{
					io.to(player1id).emit('opponentGameCard', player2);
					io.to(player2id).emit('opponentGameCard', player1);
					console.log('2 saniye başladı');
					sleep(2000);
					console.log('2 saniye bitti');
					gameengine();
					card=getPlayCard();
					io.to(player2id).emit('game card', card);
					io.to(player1id).emit('game card', card);
					player1="";
					player2="";
				}
				else
				{
					io.to(player1id).emit('opponentplay','card played')				
				}
			}


		});

    socket.on('disconnect', function(){
        if(sid==player1id)
		{
			io.emit('mesaj','session ended, please refresh page');
			init();
		}
		if(sid==player2id)
		{
			io.emit('mesaj','session ended, please refresh page');
			init();
		}

		});
	});


http.listen(port, function(){
  console.log('listening on *: ' + port);
});
