var newWidth = 50
var newHeight = 50;


function setup(){
    createCanvas(600,400);
     background(50);

}

function draw(){
    // background(50);
    if(mouseIsPressed){
        
    }
    noStroke();
    fill(255,0,0);
    ellipse(mouseX,mouseY,newWidth,newHeight);
}