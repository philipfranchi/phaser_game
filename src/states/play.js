var MapManager = require('../levels/MapManager.js');

var Play  = {

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
    },

    update: function(){
    //Game logic goes here
    },
};

module.exports = Play;
