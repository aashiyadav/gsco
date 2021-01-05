var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, 50, 100);
  wall.shapeColor=("black");
  car=createSprite(700,200,50,30);
  car.shapeColor=("pink");
  speed=random(50,100);
  weight=random(350,1550);
  
  
}

function draw() {
  background(204,255,255); 
  car.velocityX=speed;
  wall.debug=true;
  car.debug=true;
  drawSprites();

// distance between the centres = movingRect.x - fixedRect.x
// the distance between the centres becomes equal to sum of half their width when the rectangles touch

  if(wall.x - car.x < wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/2500;
    if (deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor=color(255,255,153);
    }
    if (deformation<180){
      car.shapeColor=color(51,153,102);
    }
   

  }

  






}
