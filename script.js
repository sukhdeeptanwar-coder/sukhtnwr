const text=[
"Civil Engineer",
"Web Developer",
"HTML CSS JavaScript",
"Technology Enthusiast"
];

let i=0;
let j=0;
let current="";
let letter="";

function typing(){

if(i<text.length){

if(j<=text[i].length){

letter=text[i].substring(0,j);

document.getElementById("typing").innerHTML=letter;

j++;

setTimeout(typing,120);

}else{

j=0;

i++;

if(i==text.length){

i=0;

}

setTimeout(typing,1000);

}

}

}

typing();

const theme=document.getElementById("theme");

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.innerHTML="☀️";

}else{

theme.innerHTML="🌙";

}

};

const menu=document.querySelector("#menu");

document.querySelector(".menu-btn").onclick=()=>{

menu.classList.toggle("show");

};