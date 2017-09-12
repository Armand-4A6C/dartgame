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
    [{x:centerX, y:centerY, radius:canvasX * 0.9 * 0.01408, startAngle:0, endAngle:2, name:"bullsEye", color:"red", score:50}],

    [{x:centerX, y:centerY, radius:canvasX * 0.9 * 0.03525, startAngle:0, endAngle:2, name:"bullsEyeRing", color:"green", score:25}],

    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.05, endAngle:0.15, name:"innerpie", color:"black", score:10},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.15, endAngle:0.25, name:"innerpie", color:"white", score:15},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.25, endAngle:0.35, name:"innerpie", color:"black", score:2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.35, endAngle:0.45, name:"innerpie", color:"white", score:17},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.45, endAngle:0.55, name:"innerpie", color:"black", score:3},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.55, endAngle:0.65, name:"innerpie", color:"white", score:19},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.65, endAngle:0.75, name:"innerpie", color:"black", score:7},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.75, endAngle:0.85, name:"innerpie", color:"white", score:16},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.85, endAngle:0.95, name:"innerpie", color:"black", score:8},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.95, endAngle:1.05, name:"innerpie", color:"white", score:11},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.05, endAngle:1.15, name:"innerpie", color:"black", score:14},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.15, endAngle:1.25, name:"innerpie", color:"white", score:9},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.25, endAngle:1.35, name:"innerpie", color:"black", score:12},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.35, endAngle:1.45, name:"innerpie", color:"white", score:5},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.45, endAngle:1.55, name:"innerpie", color:"black", score:20},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.55, endAngle:1.65, name:"innerpie", color:"white", score:1},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.65, endAngle:1.75, name:"innerpie", color:"black", score:18},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.75, endAngle:1.85, name:"innerpie", color:"white", score:4},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.85, endAngle:1.95, name:"innerpie", color:"black", score:13},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:1.95, endAngle:2.00, name:"innerpie", color:"white", score:9},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.21595, startAngle:0.00, endAngle:0.05, name:"innerpie", color:"white", score:9},
    ],

    //Triples
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.05, endAngle:0.15, name:"Triples", color:"green", score:10 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.15, endAngle:0.25, name:"Triples", color:"red", score:15 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.25, endAngle:0.35, name:"Triples", color:"green", score:2 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.35, endAngle:0.45, name:"Triples", color:"red", score:17 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.45, endAngle:0.55, name:"Triples", color:"green", score:3 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.55, endAngle:0.65, name:"Triples", color:"red", score:19 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.65, endAngle:0.75, name:"Triples", color:"green", score:7 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.75, endAngle:0.85, name:"Triples", color:"red", score:16 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.85, endAngle:0.95, name:"Triples", color:"green", score:8 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.95, endAngle:1.05, name:"Triples", color:"red", score:11 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.05, endAngle:1.15, name:"Triples", color:"green", score:14 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.15, endAngle:1.25, name:"Triples", color:"red", score:9 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.25, endAngle:1.35, name:"Triples", color:"green", score:12 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.35, endAngle:1.45, name:"Triples", color:"red", score:5 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.45, endAngle:1.55, name:"Triples", color:"green", score:20 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.55, endAngle:1.65, name:"Triples", color:"red", score:1 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.65, endAngle:1.75, name:"Triples", color:"green", score:18 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.75, endAngle:1.85, name:"Triples", color:"red", score:4 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.85, endAngle:1.95, name:"Triples", color:"green", score:13 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:1.95, endAngle:2.00, name:"Triples", color:"red", score:9 * 3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.23725, startAngle:0.00, endAngle:0.05, name:"Triples", color:"red", score:9 * 3 },

    ],

    //Outerpie
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.05, endAngle:0.15, name:"outerPie", color:"black", score:10 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.15, endAngle:0.25, name:"outerPie", color:"white", score:15 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.25, endAngle:0.35, name:"outerPie", color:"black", score:12 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.35, endAngle:0.45, name:"outerPie", color:"white", score:17 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.45, endAngle:0.55, name:"outerPie", color:"black", score:3 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.55, endAngle:0.65, name:"outerPie", color:"white", score:19 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.65, endAngle:0.75, name:"outerPie", color:"black", score:7 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.75, endAngle:0.85, name:"outerPie", color:"white", score:16 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.85, endAngle:0.95, name:"outerPie", color:"black", score:8 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.95, endAngle:1.05, name:"outerPie", color:"white", score:11 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.05, endAngle:1.15, name:"outerPie", color:"black", score:14 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.15, endAngle:1.25, name:"outerPie", color:"white", score:9 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.25, endAngle:1.35, name:"outerPie", color:"black", score:12 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.35, endAngle:1.45, name:"outerPie", color:"white", score:5 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.45, endAngle:1.55, name:"outerPie", color:"black", score:20 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.55, endAngle:1.65, name:"outerPie", color:"white", score:1 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.65, endAngle:1.75, name:"outerPie", color:"black", score:18 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.75, endAngle:1.85, name:"outerPie", color:"white", score:4 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.85, endAngle:1.95, name:"outerPie", color:"black", score:13 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:1.95, endAngle:2.00, name:"outerPie", color:"white", score:9 },
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.35564, startAngle:0.00, endAngle:0.05, name:"outerPie", color:"white", score:9 },

    ],

    //Doubles
    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.05, endAngle:0.15, name:"Doubles", color:"green", score:10 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.15, endAngle:0.25, name:"Doubles", color:"red", score:15 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.25, endAngle:0.35, name:"Doubles", color:"green", score:2 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.35, endAngle:0.45, name:"Doubles", color:"red", score:17 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.45, endAngle:0.55, name:"Doubles", color:"green", score:3 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.55, endAngle:0.65, name:"Doubles", color:"red", score:19 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.65, endAngle:0.75, name:"Doubles", color:"green", score:7 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.75, endAngle:0.85, name:"Doubles", color:"red", score:16 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.85, endAngle:0.95, name:"Doubles", color:"green", score:8 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.95, endAngle:1.05, name:"Doubles", color:"red", score:11 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.05, endAngle:1.15, name:"Doubles", color:"green", score:14 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.15, endAngle:1.25, name:"Doubles", color:"red", score:9 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.25, endAngle:1.35, name:"Doubles", color:"green", score:12 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.35, endAngle:1.45, name:"Doubles", color:"red", score:5 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.45, endAngle:1.55, name:"Doubles", color:"green", score:20 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.55, endAngle:1.65, name:"Doubles", color:"red", score:1 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.65, endAngle:1.75, name:"Doubles", color:"green", score:18 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.75, endAngle:1.85, name:"Doubles", color:"red", score:4 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.85, endAngle:1.95, name:"Doubles", color:"green", score:13 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:1.95, endAngle:2.00, name:"Doubles", color:"red", score:9 * 2},
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.37694, startAngle:0.00, endAngle:0.05, name:"Doubles", color:"red", score:9 * 2},

    ],

    [
        {x:centerX, y:centerY, radius:canvasX * 0.9 * 0.4750, startAngle:0, endAngle:2, name:"blackRing", color:"black", score:0}
    ],
];
