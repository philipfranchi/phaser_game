function mainState({game}){
    let {graphics, stateManager} = game;
    let state = stateManager.GameState({});

    state.update = () => {};

    state.render = () => {
        console.log('main state');
        graphics.ellipse(0,0,50,50);
    };
    state.background = graphics.color(125,255,125);

    return state;
}



export default mainState