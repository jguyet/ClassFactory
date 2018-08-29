(function(global) {
    'use strict';

    var Circle = function(data) {
		this.___contructor(data);
    }
    
    Factory.addMethods(Circle, {
        ___contructor: function(data) {
            this.init(data);

            this.set("filter", "url(#blur)");
        },
		___destructor: function() {
            console.log("DESTRUCT Circle");
        },
		circleFunction: function() {
			console.log("circleFunction called");
		}
    });

    Factory.newClass(Circle);
    Factory.extend(Circle, Shape);
	//#################################################################
	// SET TO GLOBAL VAR
	//#################################################################
	var glob = typeof global !== 'undefined' ?
    global :
    typeof window !== 'undefined' ?
    window :
    typeof WorkerGlobalScope !== 'undefined' ? self : {};

    glob.Circle = Circle;
    Circle.global = glob;
    //#################################################################
})();