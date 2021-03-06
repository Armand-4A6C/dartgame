// -------------------------
// DrawFunctions
// -------------------------

function drawArcs(array) {

    ctx.beginPath();
    for (var i=0;i<array.length;i++){
        ctx.beginPath();
        ctx.moveTo(array[i].x, array[i].y);
        ctx.arc(array[i].x, array[i].y, array[i].radius, array[i].startAngle * Math.PI, array[i].endAngle * Math.PI, false);
        ctx.fillStyle = array[i].color;
        ctx.fill();
    }

}

function drawDartboard(array) {
    for (var i = scoreE.length -1;  i >= 0; i--) {
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
         if (catch1 == "False") {
             console.log("cycles needed to finish")
         } else {
             return console.log("score:"+catch1)
         }
      }
  }
}
function handleMouseUp(e, scoreE) {
    // get canvasXY of click
    var canvasMouseX = e.clientX - offsetX;
    var canvasMouseY = e.clientY - offsetY;

    if (GetDeltaXY(canvasMouseX, canvasMouseY, scoreE) < (scoreE.radius * scoreE.radius)){

        // angle in radians
        var angleRadians = Math.atan2(canvasMouseY - scoreE.y, canvasMouseX - scoreE.x) * 180 / Math.PI;
        if (angleRadians < 0) {
            angleRadians = (360 - (angleRadians - (angleRadians*2))) / 180;
        } else {
            angleRadians = angleRadians / 180;
        }

        if ((angleRadians > scoreE.startAngle) && (angleRadians <= scoreE.endAngle)) {
            return scoreE.score;

        } else {
            return "False";
        }
    }
    else {
        return "False";
    }
}

function GetDeltaXY(canvasMouseX, canvasMouseY, scoreE ) {

    //get the y lenght for pytagoras
    if (scoreE.y < canvasMouseY) {
        deltaY = (canvasMouseY - scoreE.y)// * (canvasMouseY - scoreE.y)
        deltaY = deltaY * deltaY
    } else {
        deltaY = (scoreE.y - canvasMouseY)// * (scoreE.y - canvasMouseY)
        deltaY = deltaY * deltaY
    }

    //get the x lenght for pytagoras
    if (scoreE.x < canvasMouseX) {
        dx= scoreE.x
        deltaX = (canvasMouseX - scoreE.x);// * (canvasMouseX - scoreE.x)
        deltaX = deltaX * deltaX;
    } else {
        deltaX = (scoreE.x - canvasMouseX);// * (scoreE.x - canvasMouseX)
        deltaX = deltaX * deltaX;
    }

    return (deltaX + deltaY)
}

function dartStyle() {
    dart.style.backgroundColor = "purple";
    dart.style.width = canvasX * 0.1 + "px";
    dart.style.height = canvasY * 0.1 + "px";
    dart.style.left = canvas.offsetLeft + (canvas.width / 2);
    dart.style.top = canvas.offsetTop + (canvas.height / 2) ;

    console.log(offsetX + centerX)
    console.log(offsetY)
    console.log(centerX)

    var offsetY=canvas.offsetTop;
}
dartStyle()

function handleMouseMove(mE) {
    var mouseX = mE.clientX - offsetX;
    var mouseY = mE.clientY - offsetY;

    alert("hi")

    dart.style.left = mouseX + "px";
    dart.style.top = mouseY + "px";
}


dart.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousemove", handleMouseMove);

canvas.addEventListener("click", handleMouseUpLoop);
