// DIV rozwijany - 1 solution
// --------------------------


(function(){
	var tytul = document.querySelectorAll('.tytul');

	for(var i=0; i<tytul.length; i++) {
		var podtytul = tytul[i].nextElementSibling;
		podtytul.style.display = 'none';

		tytul[i].onclick = function(e) {
			var beep = new Audio('assets/beep.mp3');
			beep.play();
						
			var stan = (this.nextElementSibling.style.display == 'none') ? true : false;
			if(stan) {
				this.nextElementSibling.style.display = 'block';
				this.children[0].innerHTML = '&#9650;';
			} else {
				this.nextElementSibling.style.display = 'none';
				this.children[0].innerHTML = '&#9660;';
			}
		}
	}
})();




