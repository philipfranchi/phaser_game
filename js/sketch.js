import p5 from './vendor/p5/p5.js';
import Game from './game.js';

const sketch = (p) => {
    let canvas, game, stateManager, eventManager;

    p.preload =() => {
        game = Game(p);
        stateManager = game.stateManager;
        stateManager.preload();
    }

    p.setup = () => {
        canvas = p.createCanvas(640, 480);
        eventManager = game.eventManager;

        eventManager.addListener('changeState', (data)=>{})
    }
    

    p.draw = function(){
        p.background(stateManager.curState.background);
        game.eventManager.notifyAll();
        game.update();
        stateManager.update();
        stateManager.render();
    }
}

new p5(sketch);