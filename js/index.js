// Your code goes here

//on load
window.addEventListener('load', (event) => {
    alert('Welcome to Fun Bus!');
  });

//   const home = document.querySelector('.btn');
//   home.mouseover = miceAtop;
//   function miceAtop() { element =>
//       element.style.background = "blue";
//   }

//no right click or access to context menu.

noContext = document.querySelector('body');
noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});



//On Wheel
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      scale *= event.deltaY * -2; //There's 3 Deltas. X (horiz) Y (vert) and Z (forward/back)
    } // the -2 refers to negative scale on the Y coordinate system, or South/Down
    else {
      scale /= event.deltaY * 2;
    } // Positive is North/Up.
    scale = Math.min(Math.max(.9, scale), 1.2); // First is the negative (small), Second = pos (big)
    el.style.transform = `scale(${scale})`; //transform involves the action.
  } //Scale is called as the reference point, or the event within the function.
  let scale = 1; //normal scale.
  const el = document.querySelector('img'); //What the event is applied to. (first picture)
  document.onwheel = zoom; // THE event tied to the action.


//on mouse events - mouseover and mouseout
const img = document.querySelector('.img-content img');
    img.onmouseover = logMouseOver;
    img.onmouseout = logMouseOut;

function logMouseOver() {
  img.src = 'img/destination.jpg';
}

function logMouseOut() {
  img.src = 'img/adventure.jpg';
}

//dblclick and return.
const img2 = document.querySelectorAll(".img-content img")[1];
img2.addEventListener("dblclick", () => {
  img2.src = "img/bus.jpg"
})
img2.onmouseout = logMouseOut2;

function logMouseOut2() {
    img2.src = 'img/fun.jpg';
  }

//drag and drop.
var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dzone") {
    event.target.style.background = "#3356ff";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dzone") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

const content = document.querySelector(".content-section");
content.addEventListener('click', (event) => {
  content.style.backgroundColor='#786546';

});
const text = document.querySelector(".text-content");
text.addEventListener('click', (event) => {
  text.style.backgroundColor='#989874';
  event.stopPropagation()
});


const links = document.querySelectorAll('.nav-link')
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  })
})



// function keys (event) {
//     if(event.keydown === "107"){
//         document.body.backgroundColor = "blue";
//     }
// }
let backg = document.querySelector("body");
window.addEventListener("scroll", () => {
    backg.style.color = "white";
    whatADrag.style.color = "black";
    document.querySelector(".logo-heading").style.color = "blue";
    backg.style.backgroundImage = "linear-gradient(green, blue, black)";})

let foot = document.querySelector(".footer p")
document.addEventListener("keydown", (event) => {
    if (event.key == 'k')
 {
     foot.style.color = "green"
 }})



