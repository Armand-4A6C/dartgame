//--------------------------
// Mouse Handler variables
//---------------------------
var sway = {swayX:0.4, swayY: (-canvas.width * 0.12), countX:1, countY:1}
var mouseX // define it as a global variable
var mouseY // define it as a global variable


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


    // compares if the clicked point falls in a allowed radius
    if (GetDeltaXY(canvasMouseX, canvasMouseY, scoreE) < (scoreE.radius * scoreE.radius)){

        // calculate in which vector/angle there is clicked compared to the center
        // and compare if it falls between the score.startAngle score.EndAngle
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

// does the math to calculate the distance between the mouse and the center
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
    console.log(mouseX)
    console.log(mouseY)
}

function handleDartMovement() {
    var calcedSway = mouseSway()


    // makes sure the dart stays left of the right border
    if ((mouseX + sway.swayX) < (canvas.width) - canvas.width * 0.1) {

        // makes sure the dart stays right of the left border
        if ((mouseX + offsetX + sway.swayX) >= offsetX) {
            dart.style.left = (mouseX)  + sway.swayX + offsetX + "px";
        }
    }

    // makes sure the dart stays above the canvas lower border
    if ((mouseY + sway.swayY) < (canvas.height ) - canvas.height * 0.1 ) {//dart's height = 0.1

        // makes sure the dart stays below the upper border
        if ((mouseY + offsetY + sway.swayY) >= offsetY) {
            dart.style.top = (mouseY) + sway.swayY + offsetY + "px";
        }

    }
}


function mouseSway() {

    // does the math for right
    if (sway.countX == 1) {
        if ( (sway.swayX < (canvas.width * 0.14))) {
            sway.swayX = sway.swayX + (canvas.width * 0.005);
        } else {
            sway.countX = 0;
        }
    }
    // does the math for left
    else if (sway.countX == 0) {
        if (sway.swayX > (0 - canvas.width * 0.14) ) {
            sway.swayX = sway.swayX -(canvas.width * 0.005);
        } else {
            sway.countX = 1;
        }
    }

    // does the math for up
    if (sway.countY == 1) {
        if ( (sway.swayY < (canvas.width * 0.14))) {
            sway.swayY = sway.swayY + (canvas.width * 0.005);
        } else {
            sway.countY = 0;
        }
    }
    // does the math for down
    else if (sway.countY == 0) {
        if (sway.swayY > (0 - canvas.width * 0.14) ) {
            sway.swayY = sway.swayY -(canvas.width * 0.005);
        } else {
            sway.countY = 1;
        }
    }

    // console.log(sway.swayX)
    // console.log(sway.swayY)
    return sway

}

//setInterval(mouseSway, 100); //25
setInterval(handleDartMovement, 25); //16.6

dart.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousemove", handleMouseMove);

canvas.addEventListener("click", handleMouseUpLoop);
dart.addEventListener("click", handleMouseUpLoop);
