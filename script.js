class Ball{
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
  }

  draw(){
    fill('blue')
    ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 475){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 375){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3;

function setup() {
	createCanvas(500, 400);
  
  // parameters
  ball1 = new Ball(30,200,50,50,5,5,"red");
  ball2 = new Ball(100,100,50,50,10,20,"yellow");
  ball3 = new Ball(200,150,50,50,1,-1,"green");
}

function draw() {
	background(225);  
  
  ball1.draw();
  ball2.draw();
  ball3.draw();
}