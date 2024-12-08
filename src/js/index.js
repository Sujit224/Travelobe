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


let modeBtn = document.getElementById("mode")
let currMode = "light"

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode ="dark"
        document.querySelector("body").style.backgroundColor="black"
    }
    else {
        currMode="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currMode)
})
