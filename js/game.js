//Import States
import stateManager from './stateManager.js';
import assetManager from './assetManager.js';
import playState from './states/play.js'
import preloadState from './states/preload.js'

import mainState from './states/main.js'
import eventManager from './event.js'
import inputHandler from './input.js'

/*
The game object is like our global singleton, so it contains a copy of our
graphics object, state manager, input manager, event handler, etc. It does 
all the work of initializing those guys too.

*/

function GameFactory(graphics){
    let game = {
        stateManager,
        graphics,
        eventManager,

    };
    game.input = inputHandler(game);
    game.assetManager = assetManager({game});
    /*Init*/
    //Load assets
    console.log(game.assetManager);

    //Event Manager

    //State Manager
    game.stateManager.addState({key: 'main', newState: mainState({game})});
    game.stateManager.addState({key: 'play', newState: playState({game})});
    game.stateManager.addState({key: 'preload', newState: preloadState({game})});

    game.stateManager.setState({key: 'preload', data: {}});

    game.update = ()=>{
        game.assetManager.update();
        game.stateManager.update();
    };

    return game;
}



let Game = GameFactory;
module.exports = Game;