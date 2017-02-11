var Utils = {

    random : function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    deepCopy : function(oldArray){
        return oldArray.map(a => Object.assign({}, a))
    }

};

module.exports = Utils;