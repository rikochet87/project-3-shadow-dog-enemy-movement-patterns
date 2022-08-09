/**@type {HTMLCanvasElement}*/
import img1 from "../img/enemy_bat_1.png";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = 100;
const enemiesArray = [];

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}


const enemyImage = createImage(img1);
let gameFrame = 0;

class Enemy {
  constructor() {
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 83;
    this.spriteHeight = 44;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 5 - 2.5; 
    this.y += Math.random() * 5 - 2.5;

    //animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      enemyImage,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
