document.addEventListener("DOMContentLoaded", function(event) {
	(function(){
		setTimeout(function(){
			var round1 = document.querySelector('.css3.round1');
			round1.className += ' hidden';
			var message = document.querySelector('h1.css3');
			message.className += ' hidden';
		}, 2000);
		setTimeout(function(){
			var left = document.querySelector('.css3.part.left');
			left.className += ' out';
			var right = document.querySelector('.css3.part.right');
			right.className += ' out';
		}, 3000);
		setTimeout(function(){
			var preloader = document.querySelector('.css3.container');
			preloader.className += ' fadeOut';
		}, 3500);
	})();
});