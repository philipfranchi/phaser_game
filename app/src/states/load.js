module.exports = {
    loadingLabel: function () {
        //Here we add a label to let the user know we are loading everything
        //This is the "Loading" phrase in pixel art
        //You can just as easily change it for your own art :)
        this.loading = game.add.sprite(game.world.centerX, game.world.centerY - 20, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        //This is the bright blue bar that is hidden by the dark bar
        this.barBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'load_progress_bar');
        this.barBg.anchor.setTo(0.5, 0.5);
        //This bar will get cropped by the setPreloadSprite function as the game loads!
        this.bar = game.add.sprite(game.world.centerX - 192, game.world.centerY + 40, 'load_progress_bar_dark');
        this.bar.anchor.setTo(0, 0.5);
        game.load.setPreloadSprite(this.bar);
    },

    preload: function () {
        this.loadingLabel();
        //Add here all the assets that you need to game.load
        game.load.tilemap('level', 'map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('water', 'assets/water.png');
        game.load.image('grass', 'assets/grass.png');
        game.load.spritesheet('cursor', 'assets/cursor.png', 16, 16, 4);
    },

    create: function () {
        game.state.start('menu');
    }
};
