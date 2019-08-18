var x =0;
var y =0;
var speed = 3;
function setup() {
    createCanvas(640, 480);
    background(0);
}

function draw() {
    
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 100, 100);

    if (x > width){
        background(0);
        speed = -3;
    }

    if(x <= 0){
        background(0);
        speed = 3;
    }

    x=x+speed;

}
