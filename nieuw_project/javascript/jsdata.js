var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//var canvasOffset= offset();
var offsetX=canvas.offsetLeft
var offsetY=canvas.offsetTop;

// canvas.width = 200 * genScreenMultiplier;
// canvas.height = 200 * genScreenMultiplier;

canvas.width = 400;
canvas.height = 400;

canvasX = canvas.width;
canvasY = canvas.height;

centerX = canvas.width / 2;
centerY = canvas.height / 2;

var scoreE = [
    [{x:centerX, y:centerY, radius:canvasX * 0.9 * 0.02816, startAngle:0, endAngle:2, name:"bullsEye", color:"red"}],

    [{x:centerX, y:centerY, radius:canvasX * 0.9 * 0.0705, startAngle:0, endAngle:2, name:"bullsEyeRing", color:"green"}],

    //innerpie
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.05, endAngle:0.15, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.15, endAngle:0.25, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.25, endAngle:0.35, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.35, endAngle:0.45, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.45, endAngle:0.55, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.55, endAngle:0.65, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.65, endAngle:0.75, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.75, endAngle:0.85, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.85, endAngle:0.95, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.95, endAngle:1.05, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.05, endAngle:1.15, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.15, endAngle:1.25, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.25, endAngle:1.35, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.35, endAngle:1.45, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.45, endAngle:1.55, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.55, endAngle:1.65, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.65, endAngle:1.75, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.75, endAngle:1.85, name:"innerpie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.85, endAngle:1.95, name:"innerpie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.95, endAngle:0.05, name:"innerpie", color:"black"},
    ],

    //Triples
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.05, endAngle:0.15, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.15, endAngle:0.25, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.25, endAngle:0.35, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.35, endAngle:0.45, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.45, endAngle:0.55, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.55, endAngle:0.65, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.65, endAngle:0.75, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.75, endAngle:0.85, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.85, endAngle:0.95, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.95, endAngle:1.05, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.05, endAngle:1.15, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.15, endAngle:1.25, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.25, endAngle:1.35, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.35, endAngle:1.45, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.45, endAngle:1.55, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.55, endAngle:1.65, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.65, endAngle:1.75, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.75, endAngle:1.85, name:"Triples", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.85, endAngle:1.95, name:"Triples", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.95, endAngle:0.05, name:"Triples", color:"red"},
    ],

    //Outerpie
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.05, endAngle:0.15, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.15, endAngle:0.25, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.25, endAngle:0.35, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.35, endAngle:0.45, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.45, endAngle:0.55, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.55, endAngle:0.65, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.65, endAngle:0.75, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.75, endAngle:0.85, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.85, endAngle:0.95, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.95, endAngle:1.05, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.05, endAngle:1.15, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.15, endAngle:1.25, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.25, endAngle:1.35, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.35, endAngle:1.45, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.45, endAngle:1.55, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.55, endAngle:1.65, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.65, endAngle:1.75, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.75, endAngle:1.85, name:"outerPie", color:"black"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.85, endAngle:1.95, name:"outerPie", color:"white"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.95, endAngle:0.05, name:"outerPie", color:"black"},
    ],

    //Doubles
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.05, endAngle:0.15, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.15, endAngle:0.25, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.25, endAngle:0.35, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.35, endAngle:0.45, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.45, endAngle:0.55, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.55, endAngle:0.65, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.65, endAngle:0.75, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.75, endAngle:0.85, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.85, endAngle:0.95, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.95, endAngle:1.05, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.05, endAngle:1.15, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.15, endAngle:1.25, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.25, endAngle:1.35, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.35, endAngle:1.45, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.45, endAngle:1.55, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.55, endAngle:1.65, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.65, endAngle:1.75, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.75, endAngle:1.85, name:"Doubles", color:"red"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.85, endAngle:1.95, name:"Doubles", color:"green"},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.95, endAngle:0.05, name:"Doubles", color:"red"},
    ],

    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.475, startAngle:0, endAngle:2, name:"blackRing", color:"black"}
    ],
];
