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
        //console.log(array[i])
    }


}

function drawDartboard(array) {

    //for (var i = array.length;  i >= 0; i--) {

    for (var i = scoreE.length -1;  i >= 0; i--) {
        //console.log(i)
        drawArcs(array[i])
    }

}
drawDartboard(scoreE)

function drawNumbers(ctx, radius) {
    ctx.translate(canvas.height / 2, canvas.height / 2);
    ctx.font = radius * 0.10 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = '#fff';

    for(var i = 0; i < 20; i++){

    var num = i;
    if (i < 6) {
        var num = i + 14;
    } else {
        var num = i - 6;
    }
        var ang = i * 0.1 * Math.PI
        ctx.rotate(ang);
        ctx.translate(0, - radius * 0.93 + canvas.offsetLeft);
        ctx.rotate(- ang);
        ctx.fillText(scoreE[2][num].score.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.93  - canvas.offsetLeft);
        ctx.rotate(- ang);
    }
    ctx.translate(- canvas.height / 2, - canvas.height / 2);
}
drawNumbers(ctx, (canvas.height / 2 * 0.85));

function dartStyle() {
    var dart = document.getElementById('dart')
    dart.style.backgroundColor = "purple";
    dart.style.width = canvasX * 0.1 + "px";
    dart.style.height = canvasY * 0.1 + "px";
    dart.style.cursor = "none";

    dart.style.position = "absolute";
    dart.style.left = offsetX + centerX + "px";
    console.log(dart);

    dart.style.top = offsetY + centerY + "px";

    // console.log(offsetX + centerX)
    // console.log(offsetY + centerY)

    //var offsetY=canvas.offsetTop;
}
dartStyle();
