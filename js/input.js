function InputFactory(game){
    let {eventManager, graphics} = game;

    graphics.mousePressed = function(){
        eventManager.addEvent({type: 'mousePressed', data: {mouseButton: graphics.mouseButton, mouseX: graphics.mouseX, mouseY: graphics.mouseY}});
        return false;
    };
    graphics.mouseReleased = function(){
        eventManager.addEvent({type: 'mouseReleased', data: {mouseButton: graphics.mouseButton, mouseX: graphics.mouseX, mouseY: graphics.mouseY}});
        return false;
    };
    eventManager.addListener('mousePressed', (data) => {
        console.debug('mousePressed', data);
    });
    eventManager.addListener('mouseReleased', (data) => {
        console.debug('mouseReleased', data);
    });
    return {};
}

let Input = InputFactory;
module.exports = Input;