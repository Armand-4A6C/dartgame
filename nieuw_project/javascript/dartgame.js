// -------------------------
// DrawFunctions
// -------------------------

function drawArcs(array) {

    ctx.beginPath();
    for (var i=0;i<array.length;i++){

    // for (var i=0; i<2; i++){
        ctx.beginPath();
        ctx.moveTo(array[i].x, array[i].y);
        ctx.arc(array[i].x, array[i].y, array[i].radius, array[i].startAngle * Math.PI, array[i].endAngle * Math.PI, false);
        ctx.fillStyle = array[i].color;
        ctx.fill();
    }

}

function drawDartboard(array) {

    //for (var i = array.length;  i >= 0; i--) {

    for (var i = 6;  i >= 0; i--) {
        drawArcs(array[i])
    }

}
drawDartboard(scoreE)

// -------------------------
// EventhandleMouseUp
// -------------------------

function handleMouseUp(e) {
  // get canvasXY of click
  canvasMouseX = e.clientX - offsetX;
  canvasMouseY = e.clientY - offsetY;

  // test if we clicked in any cities
  for(var iA=0; iA<7; iA++) {
      for (var iB = 0; iB < scoreE[iA].length; iB++) {
          var dx = canvasMouseX - scoreE[iA][iB].x;
          var dy = canvasMouseY - scoreE[iA][iB].y;
          var isInCity = (dx * dx + dy * dy) < (scoreE[iA][iB].radius * scoreE[iA][iB].radius);
          if (isInCity) {
              return alert("You clicked in the " + scoreE[iA][iB].name);
          }
      }

  }
}
document.getElementById("canvas").addEventListener("click", handleMouseUp);
