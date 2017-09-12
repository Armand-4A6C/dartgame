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

function handleMouseUpLoop(e) {

   for(var iA=0; iA<scoreE.length; iA++) {
      for (var iB = 0; iB<scoreE[iA].length; iB++) {

         var catch1 = handleMouseUp(e,scoreE[iA][iB])
         if (catch1 == false) {
             //alert("some")
         } else {
             return catch1
         }
      }
  }
}
function handleMouseUp(e, scoreE) {
    // get canvasXY of click
    canvasMouseX = e.clientX - offsetX;
    canvasMouseY = e.clientY - offsetY;

    var dx = canvasMouseX - scoreE.x;
    var dy = canvasMouseY - scoreE.y;

    // test if clicked area is inside a certaint radius
    if ((dx * dx + dy * dy) < (scoreE.radius * scoreE.radius)) {
        console.log((dx*dx + dy *dy) + ("___") + (scoreE.radius * scoreE.radius) )

        arc()
        return alert("You clicked in the " + scoreE.score)
    }
    else {
        return false;
    }
}


document.getElementById("canvas").addEventListener("click", handleMouseUpLoop);
