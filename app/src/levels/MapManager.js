var MapManager = {
    test: function(){console.log('test passed')},
    
    /*
    Creates a game world, using 

    */
    createMap: function(width, height){
        var ret = new Array(width);
        for(var x = 0; x < width; x++){
            ret[x] = new Array(height); 
        }
        return ret;
    },

    loadMap : function(map_path){
        return map_path;
    }
};

module.exports = MapManager;
