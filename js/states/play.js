import Sprite from '../sprite.js';

function playState({game, data}){
    let {graphics, stateManager, eventManager} = game; 
    let state = stateManager.GameState({});

    state.isDown = false;

    state.setup  = () => {
        graphics.fill(255);
        eventManager.addListener('mousePressed', (data) => {
            state.isDown = !state.isDown;
            console.log('called', data);
        });
        eventManager.addListener('mouseReleased', (data) => {
            state.isDown = !state.isDown;
            console.log('called', data);
        });

        state.sprite = Sprite({game, assetKey: 'man', x: 50, y: 50});
    };
    
    state.update = () => {

    };

    state.render = () => {        
        /*if(graphics.mouseIsPressed){
            if(graphics.mouseButton == graphics.LEFT )graphics.ellipse(graphics.mouseX,graphics.mouseY,50,50);
            else {stateManager.setState({key: 'main'});}
        }*/
        state.sprite.render();
        if(state.isDown) graphics.ellipse(graphics.mouseX, graphics.mouseY, 50, 50);

    };

    state.background = graphics.color(125,125,255);
    return state;
}



export default playState