//*----------------
// Global vars
//*----------------
var myCanvas = document.getElementById("canvas");
var ctx = myCanvas.getContext("2d");


//*------------------
// Responsiveness
//*------------------
function responsiveCanvas() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var lScreenMultiplier = 1;

    if (width > 800 && height > 800) {
        lScreenMultiplier = 4;
    } else if (width > 600 && height > 600) {
        lScreenMultiplier = 3;
    } else if (width > 400 && height > 400) {
        lScreenMultiplier = 2;
    } else {
        lScreenMultiplier = 1;
    }

    return lScreenMultiplier;
}

//*-------------------
// Draw functions
//*-------------------

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}


function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}


function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}


function drawCanvas() {
    var genScreenMultiplier = responsiveCanvas();
    myCanvas.width = 200 * genScreenMultiplier;
    myCanvas.height = 200 * genScreenMultiplier;

    drawArc(ctx, 100 * genScreenMultiplier,100 * genScreenMultiplier,90 * genScreenMultiplier, 0, 2*Math.PI);
    var i1 = 0.05;
    var i2 = 0.15;

    for (var i = 0; i < 10; i++) {

        drawPieSlice(ctx, 100 * genScreenMultiplier,100 * genScreenMultiplier,90 * genScreenMultiplier, Math.PI*i1, Math.PI*i1 + Math.PI*0.1, '#ddd');
        drawPieSlice(ctx, 100 * genScreenMultiplier,100 * genScreenMultiplier,90 * genScreenMultiplier, Math.PI*i2, Math.PI*i2 + Math.PI*0.1, '#000');

        i1 = i1 + 0.2;
        i2 = i2 + 0.2;

    }
}


//*----------------------------
//  Active fire events
//*----------------------------
window.addEventListener("resize", function(){
    drawCanvas();
});
drawCanvas()
