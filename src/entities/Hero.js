import Phaser from 'phaser'

export default class extends Phaser.Sprite {

	constructor ({ game, x, y }) {

		super(game, x, y, 'knight');
		this.walk = this.animations.add('walk_left' ,[9,10,11,12,13,14,15,16,17]);
		this.walk = this.animations.add('walk_right',[27,28,29,30,31,32, 33,34, 35]);

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
	    this.createInputCallbacks();
	}

	movement(){
		if(this.cursors.left.isDown){ this.x -= 1;
		}
		else if(this.cursors.right.isDown){
		}

	}

	update () {
		this.movement();
	    //this.angle += 1;
	}

createInputCallbacks(){

	let leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	leftKey.onDown.add(() => {
		this.animations.play('walk_left', 8, true);
		this.x -= 1;
	});

	leftKey.onUp.add(() => {
		this.animations.stop('walk_left',true);
	});

	let rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	rightKey.onDown.add(() => {
		this.animations.play('walk_right', 8, true);
		this.x += 1;
	});
	rightKey.onUp.add(() => {
		this.animations.stop('walk_right',true);
	});

	let fireKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireKey.onDown.add(() => {
		this.weapon.fire();	
	});
}


}
