/*State Manager*/


/*
  The Draw Loop will actually just call the functions in the current state
  Input: an object with the following attributes
    background: an image or color
    update: a function
    render: also a function
*/
function GameStateManagerFactory (self){
        if(!self) self = {};

        self.states    = {},
        self.curState  = {};

        self.GameState = ({background, update, render, data}) => {
            background = background || 0;             //Background image
            update     = update     || function(){};  //Update funciton in draw loop
            render     = render     || function(){};  //Render funciton in draw loop
            data       = data       || {};            //Transitional Data from previous state
            return {
                background, update, render
            }
        } 

        self.addState  = ({key, newState}) => {
            if(!key || key == 'current' || self.states[key] || !newState) return false;
            self.states[key] = newState;
            return true;
        }

        self.setState  = ({key, data}) => {
            console.log('set state', key);
            if(!key ) return false;
            self.curState = self.states[key];
            self.curState.data = data;
            self.curState.setup();
        }

        self.initState = (p) => {
            let state = self.GameState({});

            state.update = () => {};

            state.render = () => {
                p.ellipse(0,0,50,50);
            };

            state.background = p.color(255,125,125);
            return state;
        }
        self.preload = ()=>{self.curState.preload()}; 

        self.update = ()=>{self.curState.update()}; 
        self.render = ()=>{self.curState.render()}; 

        return self;  

}

let GameStateManager = GameStateManagerFactory();
module.exports = GameStateManager;