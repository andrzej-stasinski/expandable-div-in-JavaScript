// DIV rozwijany - 2 solution
// --------------------------

(function(){
	var tytul = document.querySelectorAll(".tytul");

	for(var i=0; i<tytul.length; i++) {

		// DIV schowany
		// ----------------
		tytul[i].nextElementSibling.style.display = 'none';

		// click A = DIV show | DIV hidden
		// ============================
		tytul[i].onclick = function(e) {
			e.preventDefault();

			var beep = new Audio('assets/beep.mp3');
			beep.play();

			var stan = null;
			stan = (this.nextElementSibling.style.display == "none") ? true : false;
			if(stan) {
				// div = block
				this.nextElementSibling.style.display = "block";
			} else {
				// div = none
				this.nextElementSibling.style.display = "none";
			}
			this.children[0].innerHTML = (stan) ? "&#9650;"  : "&#9660;";

			console.log("DIV: display = " + this.nextElementSibling.style.display);
		}
	}
})();


