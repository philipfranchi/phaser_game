var BSPTreeMap = require('./BSPTreeMap.js'),
    Utils      = require('../utils/Utils.js');

var MapManager = function(width, height, tileSize) {

    this.tileSize = tileSize || 16;
    this.width = Math.floor(width/this.tileSize);
    this.height = Math.floor(height/this.tileSize);
    this.map = undefined;

    this.tiles = {}
    
    this.createMap = function(ground, floor, wall){
        var map = new BSPTreeMap(this.width, this.height );
        map.init();
        this.map = map;

        this.tiles['floor'] = (floor || 2);
        this.tiles['wall'] =  (wall || 4);
        this.tiles['ground'] = (ground || 3);
    },

    this.createCSV = function(){
        var ret = Utils.create2DArray(this.width, this.height, this.tiles['ground']);

        //Grab map containers
        var rooms = this.map.getRooms();
    
        for(var r = 0; r < rooms.length; r++){
            var room = rooms[r];
            for(var x = room.x; x < room.x+room.w; x++){
                for(var y = room.y; y < room.y+room.h; y++){
                    ret[x][y] = this.tiles['floor'];
                }
            }
        }
        return this.populateMap(ret);
    }

    this.toCSV = function(){
        var ret = "";
        var csv = this.createCSV();
        for(var y = 0; y < this.height; y++){
            for(var x = 0; x < this.width-1; x++){
                ret += (csv[x][y] + ",");
            }
            ret += csv[this.width-1][y] +"\n";

        }
        return ret;

    }

    this.populateMap = function(csv){
        
        var ret = Utils.create2DArray(this.width, this.height, this.tiles['ground']);
        for(var y = 0; y < this.height; y++){
            for(var x = 0; x < this.width; x++){
                ret[x][y] = csv[x][y];

                //Check neighboring pixels for 'ground'
                if(csv[x][y] == this.tiles['floor']){
                    
                    if( csv[x-1][y-1] == this.tiles['ground']|| //top    left
                        csv[x  ][y-1] == this.tiles['ground']|| //top    center
                        csv[x+1][y-1] == this.tiles['ground']|| //top    right
                        csv[x-1][y  ] == this.tiles['ground']|| //middle left
                        csv[x+1][y  ] == this.tiles['ground']|| //middle right
                        csv[x-1][y+1] == this.tiles['ground']|| //bottom left
                        csv[x  ][y+1] == this.tiles['ground']|| //bottom center
                        csv[x+1][y+1] == this.tiles['ground']   //bottom right
                        ){
                        ret[x][y] = this.tiles['wall'];
                    }
                }
            }
        }
        return ret;

    }
};

module.exports = MapManager;
