(function(global) {
    'use strict';

    var Shape = function(data) {
		this.init(data);
    }
    
    Factory.addMethods(Shape, {
        init: function(data) {

            var array = Object.entries(data);
            for (var i = 0; i < array.length; i++) {
                this.set(array[i][0], array[i][1]);
            }
        },
		___destructor: function() {
            console.log("DESTRUCT Shape");
        },
        get: function(attr) {
            return this[attr];
        },
        set: function(attr, value) {
            this[attr] = value;
        },
        translate: function(x, y) {
            this.set("x", Number(Number(this.x + x).toFixed(2)));
            this.set("y", Number(Number(this.y + y).toFixed(2)));
        },
        position: function() {
            return ({ x: this.x, y: this.y });
        }
    });

	Factory.newClass(Shape);
	//#################################################################
	// SET TO GLOBAL VAR
	//#################################################################
	var glob = typeof global !== 'undefined' ?
    global :
    typeof window !== 'undefined' ?
    window :
    typeof WorkerGlobalScope !== 'undefined' ? self : {};

    glob.Shape = Shape;
    Shape.global = glob;
    //#################################################################
})();