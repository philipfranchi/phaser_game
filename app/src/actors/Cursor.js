var Cursor = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'cursor');   
    game.add.existing(this);
    var blink = this.animations.add('blink');
    this.animations.play('blink', 4, true);
}

Cursor.prototype = Object.create(Phaser.Sprite.prototype);
Cursor.prototype.constructor = Cursor;

module.exports = Cursor;
