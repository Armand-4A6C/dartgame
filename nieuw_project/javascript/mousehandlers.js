// -------------------------
// EventhandleMouseUp
// -------------------------

function handleMouseUpLoop(e) {
console.log("canvasMouseX:" + (e.clientX - offsetX) + " canvasMouseY" + (e.clientY - offsetY))
   for(var iA=0; iA<scoreE.length; iA++) {
      for (var iB = 0; iB<scoreE[iA].length; iB++) {

         var catch1 = handleMouseUp(e,scoreE[iA][iB])
         if (catch1 == "False") {
             console.log("cycles needed to finish")
         } else {
             //return catch1
             return console.log("score:"+catch1)
         }
      }
  }
}
function handleMouseUp(e, scoreE) {
    // get canvasXY of click
    var canvasMouseX = e.clientX - offsetX + sway.swayX ;
    var canvasMouseY = e.clientY - offsetY + sway.swayY;

    if (GetDeltaXY(canvasMouseX, canvasMouseY, scoreE) < (scoreE.radius * scoreE.radius)){

        // angle in radians
        var angleRadians = Math.atan2(canvasMouseY - scoreE.y, canvasMouseX - scoreE.x) * 180 / Math.PI;
        if (angleRadians < 0) {
            angleRadians = (360 - (angleRadians - (angleRadians*2))) / 180;
        } else {
            angleRadians = angleRadians / 180;
        }

        if ((angleRadians > scoreE.startAngle) && (angleRadians <= scoreE.endAngle)) {
            // alert("You clicked in the " + scoreE.score)
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

//returns to global variables
function handleMouseMove(mE) {
    mouseX = mE.clientX - offsetX;
    mouseY = mE.clientY - offsetY;
}

function handleDartMovement() {
    var calcedSway = mouseSway()

    // makes sure the dart stays inside the canvas
    if ((mouseX + 7 + sway.swayX) < (canvas.width + offsetX) - canvas.width * 0.1) {
        if ((mouseX + 7 + sway.swayX) >= canvas.offsetLeft) {
            dart.style.left = (mouseX + 9)  + sway.swayX + "px";
        }
    }
    if ((mouseY + 7 + sway.swayY) < (canvas.height + offsetY) - canvas.height * 0.1 ) {
        if ((mouseY + 7 + sway.swayY) >= canvas.offsetTop) {
            dart.style.top = (mouseY) + 9 + sway.swayY + "px";
        }

    }
}


function mouseSway() {
    if (sway.countX == 1) {
        if ( (sway.swayX < (canvas.width * 0.14))) {
            sway.swayX = sway.swayX + (canvas.width * 0.005);
        } else {
            sway.countX = 0;
            //console.log("up")
        }
    }
    else if (sway.countX == 0) {

        if (sway.swayX > (0 - canvas.width * 0.14) ) {
            sway.swayX = sway.swayX -(canvas.width * 0.005);
        } else {
            sway.countX = 1;
            //console.log("Down")
        }
    }

    if (sway.countY == 1) {
        if ( (sway.swayY < (canvas.width * 0.14))) {
            sway.swayY = sway.swayY + (canvas.width * 0.005);
        } else {
            sway.countY = 0;
            //console.log("Left")
        }
    }
    else if (sway.countY == 0) {

        if (sway.swayY > (0 - canvas.width * 0.14) ) {
            sway.swayY = sway.swayY -(canvas.width * 0.005);
        } else {
            sway.countY = 1;
            //console.log("Right")
        }
    }
    return sway

}

//setInterval(mouseSway, 100); //25
setInterval(handleDartMovement, 25); //16.6

dart.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousemove", handleMouseMove);

canvas.addEventListener("click", handleMouseUpLoop);
dart.addEventListener("click", handleMouseUpLoop);
