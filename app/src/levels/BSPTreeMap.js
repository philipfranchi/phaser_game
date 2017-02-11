var Tree = require('./Tree.js');
var Utils = require('../utils/Utils.js');
var Queue = require('../vendor/Queue.min.js');
var Container = require('./Container.js');
var Room = require('./Room.js');


var BSPTreeMap = function(width, height) {
    this.width  = width;
    this.height = height;

    this.N_ITERATIONS     = 4;
    this.DISCARD_BY_RATIO = true;
    this.H_RATIO          = 0.45;
    this.W_RATIO          = 0.45;

    
    this.c_tree = undefined;
    this.rooms  = new Queue();
}

BSPTreeMap.prototype.init = function() {
    //Creates a new Map by defining a new, map-sized container and then splitting it
    var m_container = new Container(0, 0, this.width, this.height);
    this.c_tree = this.split_room(m_container, this.N_ITERATIONS);
    this.growRooms();
    this.rooms = this.getRoomsFromQueue();
}

BSPTreeMap.prototype.growRooms = function() {
    //Creates rooms out of containers
    var leafs = this.c_tree.getLeafs()
    for (var i = 0; i < leafs.length; i++)
        this.rooms.enqueue(new Room(leafs[i]))
}

BSPTreeMap.prototype.random_split = function(container){
    //Randomly splits a container, first by choosing a direction, then a line inside along that axis.
    var r1, r2
    if (Utils.random(0, 1) == 0) {
        // Vertical
        r1 = new Container(
            container.x, container.y,             // r1.x, r1.y
            Utils.random(1, container.w), container.h   // r1.w, r1.h
        )
        r2 = new Container(
            container.x + r1.w, container.y,      // r2.x, r2.y
            container.w - r1.w, container.h       // r2.w, r2.h
        )

        if (this.DISCARD_BY_RATIO) {
            var r1_w_ratio = r1.w / r1.h
            var r2_w_ratio = r2.w / r2.h
            if (r1_w_ratio < this.W_RATIO || r2_w_ratio < this.W_RATIO) {
                r1 = new Container(
                    container.x, container.y,             // r1.x, r1.y
                    Math.floor(container.w/2), container.h// r1.w, r1.h
                )
                r2 = new Container(
                    container.x + r1.w, container.y,      // r2.x, r2.y
                    container.w - r1.w, container.h       // r2.w, r2.h
                )
            }
        }
    }
    else {
        // Horizontal
        r1 = new Container(
            container.x, container.y,                // r1.x, r1.y
            container.w, Utils.random(1, container.h)// r1.w, r1.h
        )
        r2 = new Container(
            container.x, container.y + r1.h,      // r2.x, r2.y
            container.w, container.h - r1.h       // r2.w, r2.h
        )

        if (this.DISCARD_BY_RATIO) {
            var r1_h_ratio = r1.h / r1.w
            var r2_h_ratio = r2.h / r2.w
            if (r1_h_ratio < this.H_RATIO || r2_h_ratio < this.H_RATIO) {
                r1 = new Container(
                    container.x, container.y,              // r1.x, r1.y
                    container.w, Math.floor(container.h/2)// r1.w, r1.h
                )
                r2 = new Container(
                    container.x, container.y + r1.h,      // r2.x, r2.y
                    container.w, container.h - r1.h       // r2.w, r2.h
                )
            }
        }
    }
    return [r1, r2]

}
BSPTreeMap.prototype.split_container = function(container) {
    //Recursively builds a new BSP Tree by splitting the space in container. 
    var root = new Tree(container)
    if (iter != 0) {
        var      sr = this.random_split(container)
        root.lchild = this.split_container(sr[0], iter-1)
        root.rchild = this.split_container(sr[1], iter-1)
    }
    return root
}

BSPTreeMap.prototype.split_room = function(room, iter) {
    var Root = new Tree(room)
    if (iter != 0) {
        var      sr = this.random_split(room)
        Root.lchild = this.split_room(sr[0], iter-1)
        Root.rchild = this.split_room(sr[1], iter-1)
    }
    return Root
}

BSPTreeMap.prototype.getRoomsFromQueue = function(){
    var ret = new Array(this.rooms.length);
    for(var i = 0; this.rooms.getLength(); i++){
        ret[i] = (this.rooms.dequeue());
    }
    return ret;
}
BSPTreeMap.prototype.getRooms = function(){
    return Utils.deepCopy(this.rooms);
}
module.exports = BSPTreeMap;