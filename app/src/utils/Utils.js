var Utils = function(){};


Utils.random = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

Utils.deepCopy = function(oldArray){
        return oldArray.map(a => Object.assign({}, a))
    }

Utils.create2DArray = function(w, h, initValue){
    var ret = [];
    for(var x = 0; x < w; x++){
        var newArr = []
        for(var y = 0; y < h; y++){
            newArr.push(initValue);
        }
        ret.push(newArr);
    }
    return ret;
}

Utils.prototype.constructor = Utils;
module.exports = Utils;