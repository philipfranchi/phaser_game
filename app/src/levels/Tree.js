var Container = require('./Container.js');

var Tree = function(leaf){
    this.leaf = leaf;
    this.rchild = undefined;
    this.lchild = undefined;
}

Tree.prototype.getLeafs = function() {
    if (this.lchild === undefined && this.rchild === undefined) return [this.leaf];
    return [].concat(this.lchild.getLeafs(), this.rchild.getLeafs());
}

Tree.prototype.getLevel = function(level, queue) {

    if (queue === undefined){
        queue = [];
    }
    if (level == 1){
        queue.enqueue(this);
    }

    else {
        if (this.lchild !== undefined) this.lchild.getLevel(level-1, queue);
        if (this.rchild !== undefined) this.rchild.getLevel(level-1, queue);
    }
    return queue
}


Tree.prototype.constructor = Tree;

module.exports = Tree;
