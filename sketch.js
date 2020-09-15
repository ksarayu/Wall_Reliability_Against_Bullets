var bullet, wall, bulletSpeed, bulletWeight, thickness;

function setup() {
  createCanvas(1600, 400);
  bulletSpeed = random(223, 321);
  bulletWeight = random(30, 50);
  thickness = random(22, 83)
  bullet = createSprite(50, 200, 25, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1400, 200, thickness, height / 2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = bulletSpeed;
}

function draw() {
  background("black"); 
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    bullet.collide(wall);
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / thickness * thickness * thickness;
    if (damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge){
     return true;
  }
  return false;
}