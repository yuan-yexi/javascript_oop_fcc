// immediately invoked function expression (IIFE)
// an anonymous function that is invoked immediately after declaration
(function() {
    console.log("Immediately Executed.")
})()

// using an IIFE to create a module
// often used to group related functionality into a single object or module
let motionModule = (function () {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            }
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            }
      }
    }
})()

motionModule.glideMixin(duck)
duck.glide()
