function myFunction() {
	var game = {
		start: function() {
		    var x = event.clientX;
		    var y = event.clientY;
		    var vtl = Math.floor(Math.random()*1000); //vị tri left
		    var vtr = Math.floor(Math.random()*1000); //vị tri right
		    var vtt = Math.floor(Math.random()*500); // vi tri top
		    var vtb = Math.floor(Math.random()*500); // vi tri bottom
		    document.getElementById("block").style.left = vtl +'px';
		    document.getElementById("block").style.right = vtr +'px';
		    document.getElementById("block").style.top = vtt + 'px';
		    document.getElementById("block").style.bottom = vtb + 'px';
		},	
	}
	block.addEventListener('mouseover',game.start);
	var gameover = {
		over: function() {
			alert('Game Over !!!')
			block.removeEventListener('mouseover',game.start);
			document.getElementById("block").style.top = '100px';
			document.getElementById("block").style.left = '100px';
		}
	}
	var surrender = document.getElementById('sur');
	surrender.addEventListener('click',gameover.over);
}
play.addEventListener('click',myFunction);


