var centerX;
var centerY;
var b2;
var people;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

    b2=new Jellyfish(centerX, centerY, 60);
}

function draw() {

    background(255);
    noStroke();
    
    b2.display();
}


/*
* object Jellyfish
* @param x: starting x position of Jellyfish.
* @param y: starting y position of Jellyfish.
*/

function Jellyfish(x, y, radius){

    this.radius=radius;
    this.x=x;
    this.y=y;
    this.x2 = x-radius/2;
    this.x3 = x+radius/2;

    this.display= function(){
        //fill(this.color);
        fill(255,192,203)
        ellipse(this.x,this.y,this.radius*2,this.radius*2);
        fill(255)
        rect(this.x - this.radius, this.y, this.radius*2, this.radius*2)
        stroke(255,192,203)
        bezier(this.x, this.y, this.x-this.radius, this.y+this.radius, this.x+this.radius, this.y+this.radius, this.x, this.y+this.radius*3)
        bezier(this.x2, this.y, this.x2-this.radius, this.y+this.radius, this.x2+this.radius, this.y+this.radius, this.x2, this.y+this.radius*3)
        bezier(this.x3, this.y, this.x3-this.radius, this.y+this.radius, this.x3+this.radius, this.y+this.radius, this.x3, this.y+this.radius*3)
    }

}