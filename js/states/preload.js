function preloadState({game, data}){
    let {stateManager, eventManager} = game; 
    let state = stateManager.GameState({});

    state.preload = ()=>{
        console.log('preload');
        game.assetManager.addAsset({assetKey: 'man', assetPath: 'assets/man_move_sheet.png', frameWidth: 30, frameHeight: 20});
    }

    state.setup = ()=>{
        stateManager.setState({key: 'play', data: {}});

    }

    return state;
}

module.exports = preloadState;