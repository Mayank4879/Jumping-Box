var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 500, 200, 20);
    surface1.shapeColor=rgb(0,0,225);
    surface2 = createSprite(310, 500, 200, 20);
    surface2.shapeColor=rgb(200,100,0);
    surface3 = createSprite(520, 500, 200, 20);
    surface3.shapeColor=rgb(125,10,50);
    surface4 = createSprite(730, 500, 200, 20);
    surface4.shapeColor=rgb(0,75,0);

    //create box sprite and give velocity
    box = createSprite(random(20,750), 100, 20, 20);
    box.shapeColor=rgb(225,225,225);

    box.velocityX= 3;
    box.velocityY=-4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor=rgb(0,0,225);
        music.play();
    }
    if(surface2.isTouching(box) ){ 
        box.shapeColor=rgb(200,100,0);
        music.stop();
        box.velocityX=0; 
        box.velocityY=0;
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor=rgb(125,10,50);
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor=rgb(0,75,0);
    }



    drawSprites();
}
