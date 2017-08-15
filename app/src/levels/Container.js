var Point = require('../utils/Point.js');


var Container = function(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.center = new Point(
        this.x + (this.w/2),
        this.y + (this.h/2)
    )
}


Container.prototype.constructor = Container;

module.exports = Container;
