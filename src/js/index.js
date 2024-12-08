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

for (let i = 0; i < 6; i++) {
	state[i].addEventListener('mouseover',function() {
		green[i].classList.add("change-height") ;
		content[i].classList.add("display") ;
	})
	state[i].addEventListener('mouseout',function() {
		content[i].classList.add("State-cont") ;
		content[i].classList.remove("display") ;
		green[i].classList.remove("change-height") ;
	})
}



names=["Lucknow","Delhi","Kolkata","Jaipur","Ahmedabad","Hyderabad","Pune","Chennai","Bengaluru"]
codes=["LKO","DEL","CCU","JAI","AMD","HYD","PNQ","MAA","BLR"]

for (let i = 0; i < names.length; i++) {
	elem = document.createElement("option");
	elem.setAttribute("value", `${codes[i]}`);
	elem.innerHTML = `${names[i]} (${codes[i]})`;
	Fromm.appendChild(elem);
	elem = document.createElement("option");
	elem.setAttribute("value", `${codes[i]}`);
	elem.innerHTML = `${names[i]} (${codes[i]})`;
	Too.appendChild(elem);
}



function ToggleTheme(){
	document.body.classList.toggle("dark-theme");
}