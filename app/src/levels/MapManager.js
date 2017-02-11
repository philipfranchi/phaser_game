var BSPTreeMap = require('./BSPTreeMap.js');

var MapManager = function(width, height, tileSize) {
    this.tileSize = tileSize || 16;
    this.width = Math.floor(width/this.tileSize);
    this.height = Math.floor(height/this.tileSize);
    this.map = undefined;
    this.createMap = function(floor, wall){
        var map = new BSPTreeMap(this.width, this.height );
        map.init();
        this.map = map;
        //var ret = this.toCSV(map);
        return map;
    },

    this.toCSV = function(){
        //Create an empty array for each pixel in the new map
        var ret = [];
        for(var x = 0; x < this.width; x++){
            var newArr = []
            for(var y = 0; y < this.height; y++){
                newArr.push(1);
            }
            ret.push(newArr);
        }

        //Grab map containers
        var rooms = this.map.getRooms();
        rooms.forEach(function(room){
            for(var x = room.x; x < room.x+room.w; x++){
                for(var y = room.y; y < room.y+room.h; y++){
                    ret[x][y] = 0;
                }
            }
        });
        return ret;
    }

    this.prettyCSV = function(){
        
        var ret = "";
        var csv = this.toCSV();
        for(var y = 0; y < this.height; y++){
            for(var x = 0; x < this.width-1; x++){
                ret += (csv[x][y] + ",");
            }
            ret += csv[this.width-1][y] +"\n";

        }
        return ret;

    }

    this.loadMap = function(map_path){
        return map_path;

    }


};

module.exports = MapManager;
