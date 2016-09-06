	var socket = io();
	var index;
	var playercards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

	$('#playerflag').val('1');

	socket.on('opponentScore', function(msg){
		$('#opponentScore').text(msg);
	});

	socket.on('playerScore', function(msg){
		$('#playerScore').text(msg);
	});

	socket.on('game card', function(msg){
		$('#gamecard').text('');
		$('#gamecard').prepend("<img width='120px' src='c/c/"+msg+"'>");
		$('#opponentGameCard').text('');
		$('#playergamecard').text('');
		$('#playerflag').val('0');	
	});
	
	socket.on('opponentplay', function(msg){
		$('#mesaj').text(msg);
//		$('#opponentGameCard').addClass('opponentcard');
		$('#opponentGameCard').prepend("<img width='120px' height='170' src='b2'>");
	});
	
	socket.on('mesaj', function(msg){
		$('#mesaj').text(msg);
	});
	
	socket.on('opponentGameCard', function(msg){
//		$('#opponentGameCard').removeClass('opponentcard');
		$('#opponentGameCard').text('');
//		$('#opponentGameCard').prepend("<img width='120px' src='c/c/"+msg+"'>");
		$('#mesaj').text('rakip card '+msg);
		$('#opponentGameCard').text('');
		//alert(msg);
		$('#opponentGameCard').prepend("<img width='120px' src='c/"+$('#opponentSign').val()+"/"+msg+"'>");
	});
	
	socket.on('reset', function(msg)
	{
		$("li").remove();
		$('#playerSign').val(msg);
		if(msg=="s")
		{
			$('#opponentSign').val("h");
		}
		else
		{
			$('#opponentSign').val("s");
		}
		for (index = 0; index < playercards.length; ++index) 
			{
				$("ul.playerul").append("<li class='player' id='"+playercards[index]+"'><img width='75px' src='c/"+msg+"/"+playercards[index]+"'></li>");
			}
	});		
	
	$("ul").on("click", "li.player", function(){
		if($('#playerflag').val()=="0")
		{
			socket.emit('playerPlayCard', $(this).attr("id"));
			$('#playergamecard').text("");
			$('#playergamecard').prepend("<img width='120px' src='c/"+$('#playerSign').val()+"/"+$(this).attr("id")+"'>");
			$('#playerflag').val('1');
			$(this).remove();
		}
	});

	$("input.resetserver").click(function() 
	{
		socket.emit('resetserver', 'resetserver');
	});
	
