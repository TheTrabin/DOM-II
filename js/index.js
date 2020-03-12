// Your code goes here
window.addEventListener('load', (event) => {
    alert('Welcome to Fun Bus!');
  });

//   const home = document.querySelector('.btn');
//   home.mouseover = miceAtop;
//   function miceAtop() { element =>
//       element.style.background = "blue";
//   }


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