function SpriteFactory({game, assetKey, frameWidth, frameHeight, x, y}){
    let Sprite = {game, assetKey, x ,y};
    if(!Sprite.x) Sprite.x = 0;
    if(!Sprite.y) Sprite.y = 0;

    let asset = game.assetManager.getAsset(assetKey);
    console.log(asset);
    Sprite.render = ()=>{
        //console.log('image', game.assetManager[assetKey]);
        game.graphics.image(asset.img, x, y);
    };


    return Sprite;
}



let Sprite = SpriteFactory;
module.exports = Sprite;