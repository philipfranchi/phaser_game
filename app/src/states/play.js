var MapManager = require('../levels/MapManager.js');
var Cursor = require('../actors/Cursor.js');

var Play  = {

    cursor : null,

    preload: function(){
        MapManager.createMap(game.width, game.height);
    },

    create: function(){
    //This is just like any other Phaser create function
        game.map = game.add.tilemap('level', 16, 16);
        game.map.addTilesetImage('water', 'water');
        game.map.addTilesetImage('grass', 'grass');
        game.backgroundLayer = game.map.createLayer('backgroundLayer');
        game.backgroundLayer.resizeWorld();

        this.cursor = new Cursor(game, (game.width/2) - (game.width/2)%16, (game.height/2) - (game.height/2)%16);
//        game.add.existing(this.cursor);
//        var blink = this.cursor.animations.add('blink');
//        this.cursor.animations.play('blink', 4, true);
    },

    update: function(){
    //Game logic goes here
    },
};

module.exports = Play;
