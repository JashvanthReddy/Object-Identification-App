img= ""

function preload(){
    img= loadImage('bus.jpg')
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#6a5acd");
    stroke("6a5acd");
    noFill();
    text("bus", 45, 75);
    rect(30,30,450,350);
}