var Utils = require('../utils/Utils.js');
var Room = function( container ) {
    this.x = container.x + Utils.random(0, Math.floor(container.w/3));
    this.y = container.y + Utils.random(0, Math.floor(container.h/3));
    this.w = container.w - (this.x - container.x);
    this.h = container.h - (this.y - container.y);
    this.w -= Utils.random(0, this.w/3);
    this.h -= Utils.random(0, this.w/3);
    return this
}
Room.prototype.constructor = Room;

module.exports = Room;
