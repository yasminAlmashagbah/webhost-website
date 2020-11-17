var next = document.querySelector(".next-testomonial");
var pic = document.querySelector(".test-pic-id");
var name2 = document.querySelector(".name-test");
var body = document.querySelector(".test-body");
var prev = document.querySelector(".prev-testomonial");

let i = 0;
prev.addEventListener("click",prevfun);
next.addEventListener("click", nextfun);
 var names = ["adam", "yasmin"];
 
var bodys = [
  "/“n just 2 very short meetings with 96 bucks, they managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.I/”",
  "they managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
];
function nextfun() {
  name2.textContent = names[i];
  
  body.textContent = bodys[i];
  
  i++;
  if (i === names.length) i = 0;
}
function prevfun() {
  if (i ===0) i =  names.length;

  name2.textContent = names[i];
  
  body.textContent = bodys[i];
 
  i--;
  
}