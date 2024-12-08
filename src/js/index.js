const hero = document.getElementById('hero');
const header = document.getElementById('header');
let a = "";

function herobg(x) {
	a = x.style.backgroundImage;
	a = a.slice(0,-17) + "1500&quality=80";
	console.log(a);
	hero.style.backgroundImage = a;
}

function ToggleHeader(x) {
	header.classList.toggle("active");
}

base_url="https://www.skyscanner.co.in/transport/flights/";

Fromm= document.getElementById("from");
Too= document.getElementById("to");
Datee= document.getElementById("date");

const redric = () => {
	Frommv = Fromm.value;
	Toov = Too.value;
	Dateev = Datee.value;
	Dateev = Dateev.split('-');
	window.location.href = base_url+Frommv+"/"+Toov+"/"+Dateev[0].slice(2,4)+Dateev[1]+Dateev[2]+"/";
}

const state = document.getElementsByClassName("state-box") ;
const content = document.getElementsByClassName("State-cont") ;
const green = document.getElementsByClassName("state-title") ;

state[0].addEventListener('mouseover',function() {
	green[0].classList.add("change-height") ;
	content[0].classList.add("display") ;
})
state[0].addEventListener('mouseout',function() {
	content[0].classList.add("State-cont") ;
	content[0].classList.remove("display") ;
	green[0].classList.remove("change-height") ;
})

state[1].addEventListener('mouseover',function() {
	green[1].classList.add("change-height") ;
	content[1].classList.add("display") ;
})
state[1].addEventListener('mouseout',function() {
	content[1].classList.add("State-cont") ;
	content[1].classList.remove("display") ;
	green[1].classList.remove("change-height") ;
})

state[2].addEventListener('mouseover',function() {
	green[2].classList.add("change-height") ;
	content[2].classList.add("display") ;
})
state[2].addEventListener('mouseout',function() {
	content[2].classList.add("State-cont") ;
	content[2].classList.remove("display") ;
	green[2].classList.remove("change-height") ;
})

state[3].addEventListener('mouseover',function() {
	green[3].classList.add("change-height") ;
	content[3].classList.add("display") ;
})
state[3].addEventListener('mouseout',function() {
	content[3].classList.add("State-cont") ;
	content[3].classList.remove("display") ;
	green[3].classList.remove("change-height") ;
})

state[4].addEventListener('mouseover',function() {
	green[4].classList.add("change-height") ;
	content[4].classList.add("display") ;
})
state[4].addEventListener('mouseout',function() {
	content[4].classList.add("State-cont") ;
	content[4].classList.remove("display") ;
	green[4].classList.remove("change-height") ;
})



state[5].addEventListener('mouseover',function() {
	green[5].classList.add("change-height") ;
	content[5].classList.add("display") ;
})
state[5].addEventListener('mouseout',function() {
	content[5].classList.add("State-cont") ;
	content[5].classList.remove("display") ;
	green[5].classList.remove("change-height") ;
})


