var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dart = document.getElementById('dart')

//var canvasOffset= offset();
var offsetX = canvas.offsetLeft
var offsetY = canvas.offsetTop;
canvas.style.zIndex = 0

// canvas.width = 200 * genScreenMultiplier;
// canvas.height = 200 * genScreenMultiplier;

canvas.width = 400;
canvas.height = 400;

canvasX = canvas.width;
canvasY = canvas.height;

centerX = canvas.width / 2;
centerY = canvas.height / 2;

var scoreE = []


function SetData() {
    var sAngle = 0.05;
    var color = [0,0,0,"black","white","red","green"]
    var allScores = [10,15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13,9];
    var radius = [canvasX * 0.9 * 0.01408, canvasX * 0.9 * 0.03525, canvasX * 0.9 * 0.21595, canvasX * 0.9 * 0.23725, canvasX * 0.9 * 0.35564, canvasX * 0.9 * 0.37694, canvasX * 0.9 * 0.4750 ]
    var names = ["bullsEye", "bullsEyeRing", "innerpie", "Triples", "Outerpie", "Doubles", "Outerring"];

    //bullsEye
    var aPos = 0
    scoreE[aPos] = [{x:centerX, y:centerY, radius:radius[aPos], startAngle:0, endAngle:2, name: name[aPos], color:color[5], score:50}];

    //bullsEyeRing
    var aPos = 1
    scoreE[aPos] = [{x:centerX, y:centerY, radius:radius[aPos], startAngle:0, endAngle:2, name: name[aPos], color:color[6], score:25}];

    function createPiesAndDoubles() {

        for (var aPos = 2; aPos < 6; aPos++) {
            var sA = sAngle
            scoreE[aPos] = []

            if ( aPos == 3 || aPos == 5) {
                //sets colour for the double and triple ring
                color[0] = color[6]
                color[1] = color[5]
                color[2] = color[6]

                //sets the score multiplier for the double and triple ring
                if (aPos == 3) {
                    var multiplier = 3
                } else {
                    var multiplier = 2
                }

            } else {
                //sets the colour for the pie pieces
                color[0] = color[4]
                color[1] = color[3]
                color[2] = color[4]

                //sets the multiplier of the pie pieces
                var multiplier = 1
            }

            //Sets the piepieces and doubler rings with the global vars x+y-center, radius, sAngle, names, color, allScores,
            for (var i = 0; i < 19; i++) {
                if (color[0] == color[1]) {
                    color[0] = color[2]
                } else {
                    color[0] = color[1]
                }

                var sE = sA + 0.10;
                scoreE[aPos][i] = {x:centerX, y:centerY, radius:radius[aPos], startAngle:sA, endAngle:sE, name: names[aPos], color:color[0], score:allScores[i] * multiplier}
                sA = sE;
            }
            scoreE[aPos][19] = {x:centerX, y:centerY, radius:radius[aPos], startAngle:1.95, endAngle:2.00, name: names[aPos], color:color[2], score:allScores[19] * multiplier};
            scoreE[aPos][20] = {x:centerX, y:centerY, radius:radius[aPos], startAngle:0.00, endAngle:0.05, name: names[aPos], color:color[2], score:allScores[19] * multiplier};
        }
    }
    createPiesAndDoubles()

    //Outerring
    var aPos = 6
    scoreE[aPos] = [{x:centerX, y:centerY, radius:radius[aPos], startAngle:0, endAngle:2, name:name[aPos], color:color[3], score:0}]
}
SetData()
