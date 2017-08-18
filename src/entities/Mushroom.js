import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y, 'mushroom');

  	this.cursors = game.input.keyboard.createCursorKeys();
    this.anchor.setTo(0.5);

    this.weapon = game.add.weapon(40, 'bullet');
    //  The 'rgblaser.png' is a Sprite Sheet with 80 frames in it (each 4x4 px in size)
    //  The 3rd argument tells the Weapon Plugin to advance to the next frame each time
    //  a bullet is fired, when it hits 80 it'll wrap to zero again.
    //  You can also set this via this.weapon.bulletFrameCycle = true
    this.weapon.setBulletFrames(0, 80, true);
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //  The speed at which the bullet is fired
    this.weapon.bulletSpeed = 400;
    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 50ms
    this.weapon.fireRate = 100;
    this.weapon.trackSprite(this, 0, 0, true);

    this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


  }

  movement(){
  	if(this.cursors.left.isDown){
  		this.x -= 1;
  	}
  	else if(this.cursors.right.isDown){
  		this.x += 1;
  	}

  	if(this.fireButton.isDown) this.weapon.fire();
  }

  update () {
  	this.movement();
    this.angle += 1;
  }
}
