/* Author:
Scott Tolinski
*/


$(document).ready(function() {
	var crew1,
	crew2,
	winner,
	win,
	fnd,
	org,
	btl,
	dyn,
	exe,
	score1,
	score2,
	totalScore,
	winz,
	c = 0;
	// Sets Crew Names to categories 
	$('.crew1-name').focusout(function(){
		crew1 = $('.crew1-name').val();
		$('.radio1 span').html(crew1)
	})
	$('.crew2-name').focusout(function(){
		crew2 = $('.crew2-name').val();
		$('.radio2 span').html(crew2)
	})
	// Runs The show
	$('.go').click(function(){
		fnd = $('input:radio[name=fnd]:checked').val();
		org = $('input:radio[name=org]:checked').val();
		btl = $('input:radio[name=btl]:checked').val();
		dyn = $('input:radio[name=dyn]:checked').val();
		exe = $('input:radio[name=exe]:checked').val();
		winz = $('input:radio[name=win]:checked').val();
		score1 = $('#final1').val();
		score2 = $('#final2').val();
		totalScore = score1 + score2;
		crew1 = $('.crew1-name').val();
		crew2 = $('.crew2-name').val();
		$('#form-stuff').animate({
			left: '100%'}, 1000, function(){
			c++;
		});
	});
	// Advances Categories Upon Clicking
	$('html').click(function(){
		console.log(c);
		switch (c) {
			case 0:
				break;
			case 1:
				animateWin(fnd, "Foundation", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/found_big.png" />');
				break;
			case 2:
				animateWinner(fnd)
				break;
			case 3:
				animateWin(org, "Originality", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/og_big.png" />');
				break;
			case 4:
				animateWinner(org)
				break;
			case 5:
				animateWin(btl, "Battle", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/battle.png" />');
				break;
			case 6:
				animateWinner(btl)
				break;
			case 7:
				animateWin(dyn, "Dynamics", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/dyna_big.png" />');
				break;
			case 8:
				animateWinner(dyn)
				break;
			case 9:
				animateWin(exe, "Execution", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/exe_big.png" />');
				break;
			case 10:
				animateWinner(exe)
				break;
			case 11:
				animateFinal(winz, "the Battle", '' );
				break;
			case 12:
				animateWinner(winz)
				break;
			case 13:
				if (winner === "tie") {
					addScore();
				} else {
					showWinner();
				};
				break;
			case 14:
				tieWinner();
				break;
		}
	});


	// Runs Animation
	function animateWin(round, rnd, img) {
		$('#main').html('<h2>' + rnd + '</h2>' + img).hide().fadeIn("slow");
		// if (c == 6) {
		// 	$('#main').append('<h3>With a score of ' + score1 + ' to ' + score2 + '</h3>');
		// }
		c++;		
	}
	function animateWinner(round) {
		win = round;
		winner = checkWinner(win);
		$('<h1 class="winner">' + winner + '</h1>').hide().appendTo("#main").fadeIn("slow");
		c++;
	}

	// Compares fields
	function checkWinner(win) {
		console.log(win);
		if (win === 'crew1') {
			return crew1;
		} else if (win === 'crew2') {
			return crew2;
		} else {
			return "tie";
		}
	}
	function animateFinal(round) {
		win = round;
		winner = checkWinner(win);
		if (winner === "tie") {
			$('#main').fadeOut("slow").html('<h1 class="tie winner">' + winner + '</h1>').hide().fadeIn("slow");
			c = c+2;
		} else {
			$('#main').html("<h1 id='winner' class='winner final'><em>Winner:</em></h1>").hide().fadeIn("slow");
			c++;
		}
	}
	function addScore() {
		$('#main').append('<h3>With a score of ' + score1 + ' to ' + score2 + '</h3>');
		c++;
	}
	function tieWinner() {
		if (score1 > score2) {
			winner = crew1;
		} else {
			winner = crew2;
		}
		$("<h1 class='winner'><em>Winner:</em>" + winner + "</h1>").hide().appendTo("#main").fadeIn("slow");
		c = c+20;
	}
	function showWinner() {
		$(winner).appendTo("#winner").hide().fadeIn("slow");
		c = c+10;
	}
});


