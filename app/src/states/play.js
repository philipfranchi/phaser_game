var MapManager = require('../levels/MapManager.js');
//var Cursor = require('../actors/Cursor.js');

var Play  = {

    //cursor : null,
    cursors : undefined,

    preload: function(){
        var mapMan = new MapManager(game.width, game.height, 16);
        mapMan.createMap();
        game.load.tilemap('map', null, mapMan.toCSV(), Phaser.Tilemap.CSV);
    },

    create: function(){
    //This is just like any other Phaser create function
        /*game.map = game.add.tilemap('level', 16, 16);
        game.map.addTilesetImage('water', 'water');
        game.map.addTilesetImage('grass', 'grass');
        game.backgroundLayer = game.map.createLayer('backgroundLayer');
        game.backgroundLayer.resizeWorld();*/
    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
        map = game.add.tilemap('map', 16, 16);

        //  Now add in the tileset
        map.addTilesetImage('csv-tiles');
        
        //  Create our layer
        layer = map.createLayer(0);

        //  Resize the world
       layer.resizeWorld();
        this.cursors = game.input.keyboard.createCursorKeys();


        //this.cursor = new Cursor(game, (game.width/2) - (game.width/2)%16, (game.height/2) - (game.height/2)%16);
//        game.add.existing(this.cursor);
//        var blink = this.cursor.animations.add('blink');
//        this.cursor.animations.play('blink', 4, true);
    },

    update: function() {
        if (this.cursors.left.isDown)
        {
            game.camera.x -= 4;
        }
        else if (this.cursors.right.isDown)
        {
            game.camera.x += 4;
        }

        if (this.cursors.up.isDown)
        {
            game.camera.y -= 4;
        }
        else if (this.cursors.down.isDown)
        {
            game.camera.y += 4;
        }

    }
};

module.exports = Play;
