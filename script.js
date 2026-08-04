/* ===========================
   $HAPPY OFFICIAL WEBSITE
   SCRIPT.JS
=========================== */


/* ===========================
   PARTICLE SYSTEM
=========================== */

const canvas = document.createElement("canvas");
canvas.id = "particleCanvas";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";


let particles = [];

function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);


class Particle{

constructor(){

this.x =
Math.random()*canvas.width;

this.y =
Math.random()*canvas.height;

this.size =
Math.random()*2+1;

this.speed =
Math.random()*0.6+0.2;

this.opacity =
Math.random();

}


update(){

this.y -= this.speed;


if(this.y < 0){

this.y =
canvas.height;

this.x =
Math.random()*canvas.width;

}

}


draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);

ctx.fillStyle =
`rgba(255,213,74,${this.opacity})`;

ctx.fill();

}

}



for(let i=0;i<180;i++){

particles.push(
new Particle()
);

}


function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


particles.forEach(p=>{

p.update();

p.draw();

});


requestAnimationFrame(
animateParticles
);

}


animateParticles();



/* ===========================
   SCROLL REVEAL
=========================== */


const revealElements =
document.querySelectorAll(
".reveal"
);


function reveal(){

let windowHeight =
window.innerHeight;


revealElements.forEach(
(element)=>{


let position =
element.getBoundingClientRect()
.top;


if(position <
windowHeight - 100){

element.classList.add(
"active"
);

}


});

}


window.addEventListener(
"scroll",
reveal
);


reveal();



/* ===========================
   NAVBAR DYNAMIC
=========================== */


const nav =
document.querySelector("nav");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 80){

nav.style.background =
"rgba(0,0,0,.9)";

nav.style.boxShadow =
"0 10px 40px rgba(0,0,0,.6)";


}else{


nav.style.background =
"rgba(0,0,0,.55)";

nav.style.boxShadow =
"none";


}


});



/* ===========================
   HERO PARALLAX
=========================== */


const hero =
document.querySelector(".heroImage");


window.addEventListener(
"scroll",
()=>{


if(hero){

let offset =
window.scrollY * .35;


hero.style.transform =
`scale(1.1) translateY(${offset}px)`;

}


});



/* ===========================
   TOKEN COUNTERS
=========================== */


const counters =
document.querySelectorAll(
".counter"
);


let started = false;


function startCounters(){


if(started)
return;


let section =
document.querySelector(
".tokenomics"
);


if(!section)
return;


let position =
section.getBoundingClientRect()
.top;


if(position <
window.innerHeight - 150){


started=true;


counters.forEach(
(counter)=>{


let target =
parseInt(
counter.dataset.target
);


let current=0;


let increment =
target / 120;



let timer =
setInterval(
()=>{


current += increment;


if(current >= target){


counter.innerText =
target;


clearInterval(timer);


}else{


counter.innerText =
Math.floor(current);


}


},
20
);


});


}



}


window.addEventListener(
"scroll",
startCounters
);



/* ===========================
   SMOOTH BUTTON EFFECT
=========================== */


const buttons =
document.querySelectorAll(
".goldButton,.buyButton,.darkButton"
);


buttons.forEach(
button=>{


button.addEventListener(
"mouseenter",
()=>{

button.style.transform =
"translateY(-6px) scale(1.05)";

}
);



button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translateY(0) scale(1)";

}

);


});



/* ===========================
   CARD 3D TILT EFFECT
=========================== */


const cards =
document.querySelectorAll(
".featureCard,.glass,.tokenBox"
);



cards.forEach(
card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect =
card.getBoundingClientRect();


let x =
e.clientX - rect.left;


let y =
e.clientY - rect.top;


let rotateX =
(y-rect.height/2)/20;


let rotateY =
(rect.width/2-x)/20;



card.style.transform =
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});


card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";

});


});



/* ===========================
   CURSOR GLOW
=========================== */


const glow =
document.createElement(
"div"
);


glow.style.position =
"fixed";


glow.style.width =
"250px";


glow.style.height =
"250px";


glow.style.borderRadius =
"50%";


glow.style.background =
"rgba(255,213,74,.12)";


glow.style.filter =
"blur(70px)";


glow.style.pointerEvents =
"none";


glow.style.zIndex =
"-1";


document.body.appendChild(
glow
);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX-125+"px";


glow.style.top =
e.clientY-125+"px";


});



/* ===========================
   PAGE LOADED CINEMATIC ENTRY
=========================== */


window.addEventListener(
"load",
()=>{


document.body.style.opacity =
"1";


document.body.style.transition =
"opacity 1.5s ease";


});