
/**/
function EventManagerFactory(self){
    if(!self) self = {};

    self.listeners = {};
    self.eventQueue = [];

    self.addListener = function(key, listener){
        if(!self.listeners[key]) self.listeners[key] = [];
        self.listeners[key].push(listener);
    }
    self.removeListener = function(key,listener){
        let idx = self.listener[key].indexOf(listener);
        if(idx > -1) self.listener[key] = self.listener[key].splice(idx, 1);
    }

    self.addEvent = function(event){
        self.eventQueue.push(event);
    }
    self.notifyListeners = function(event){
        self.listeners[event.type].forEach((cur)=>{cur(event.data)});
    }
    self.notifyAll = function(){
        self.eventQueue.forEach( (cur)=>{
            self.notifyListeners(cur);
        });
        self.eventQueue = [];
    }


    return self;
}
let EventManager = EventManagerFactory();

module.exports = EventManager;