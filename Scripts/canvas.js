context = document.getElementById('canvas').getContext("2d");

var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

document.getElementById("canvas").addEventListener("mousedown", mouseDown);
document.getElementById("canvas").addEventListener("mousemove", mouseMove);
document.getElementById("canvas").addEventListener("mouseup", mouseUp);
document.getElementById("canvas").addEventListener("mouseleave", mouseLeave);
document.getElementById("button").addEventListener("click", buttonClicked);


function mouseDown(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
    
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
}

function mouseMove(e) {
   if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
}

function mouseUp(e) {
  paint = false;
}

function mouseLeave(e) {
  paint = false;
}

function buttonClicked(e) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  clickX = [];
  clickY = [];
  clickDrag = [];
}
 
function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  //context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 3;
      
  for(var i=0; i < clickX.length; i++) {    
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}