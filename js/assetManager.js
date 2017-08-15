const assets = {};
let assetManager; 

const AssetManagerFactory = ({game})=>{

    if(assetManager) return assetManager;

    let {graphics} = game;
    //Pass in the file path for the asset. 
    //If its a sheet, you need to specify the width and height
    let addAsset = ({assetKey, assetPath, frameWidth, frameHeight})=>{
        let img = graphics.loadImage(assetPath);

        if( !(frameWidth && frameHeight) ){
            assets[assetKey] = {type: 'image', assetKey, assetPath, img};
            return;
        }
        
        let frames = [];
        console.log(img);

        for(let x = 0; x < img.width/frameWidth; x+=frameWidth){
            for(let y = 0; y < img.height/frameHeight; y += frameHeight){
                console.log(x, y);
                frames.push(graphics.get(x,y, frameWidth, frameHeight));
            }
        }
        img = frames[0];
        assets[assetKey] = {type: 'animation', assetKey, assetPath, img, frames, curFrame: 0};
    }; 
    
    let getAsset = (key) =>{
        return assets[key];
    };

    let update = ()=>{

        Object.keys(assets).forEach((curKey)=>{
            let cur = assets[curKey];
            if(cur.type == 'animation'){
                cur.curFrame = (cur.curFrame +1)%cur.frames.length-1;
                cur.img = cur.frames[0];
            }
        });
    };
    //test
    assetManager = {update, getAsset, addAsset, assets};
    return assetManager;
}


export default AssetManagerFactory;