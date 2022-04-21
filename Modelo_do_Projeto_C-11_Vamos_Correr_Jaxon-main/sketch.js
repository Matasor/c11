var bomb
var coin
var energyDrink
var path
var power
var runner1,runner2


function preload(){
  bomb = loadImage('bomb.png')
  coin = loadImage('coin.png')
  energyDrink = loadImage('energyDrink.png')
  path = loadImage('path.png')
  power = loadImage('power.png')
  runner1 = loadAnimation('Runner-1.png','Runner-2.png')

}

function setup(){
  createCanvas(400,400);
  runner2 = createSprite(180,340,30,30)
  runner2.addAnimation('runner3',runner1)
}

function draw() {
  background(0);
  drawSprites();
}
