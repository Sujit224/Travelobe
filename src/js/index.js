const hero = document.getElementById('hero');
let a = "";

function herobg(x) {
	a = x.style.backgroundImage;
	a = a.slice(0,-17) + "1500&quality=80";
	console.log(a);
	hero.style.backgroundImage = a;
}