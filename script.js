window.onload = function() {
var menu = document.body.querySelector(".menu"),
	ul = document.body.querySelector(".menu ul"),
	body = document.body,
	before = document.body.querySelector(".menuBtn .before"),
	after = document.body.querySelector(".menuBtn .after"),
	btn = document.body.querySelector(".menuBtn");
	btn.onmouseover = menuShow;
	btn.onmouseover = menuShow;
	document.body.querySelector(".menu ul").onmouseover = menuShow;
	document.body.querySelector(".menu ul").onmouseout = menuHide;	
		function menuShow() {
			ul.style.display = "inline-block";
			body.style.left = "-200px";
			before.style.transform = "rotate(90deg)";
			after.style.transform = "rotate(90deg)";
		}
		
		function menuHide() {
			ul.style.display = "none";
			body.style.left = "0";
			before.style.transform = "rotate(0deg)";
			before.style.transform = "translateY(-7px)";
			after.style.transform = "rotate(0deg)";
			after.style.transform = "translateY(7px)";
		}
}