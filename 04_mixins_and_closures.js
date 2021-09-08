// adding a mixin to add common behavior between unrelated objects
const glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Glide away.")
    }
}

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()

// using closures to protect properties within an object from being modified externally
// simplest way is to define variable within the object so it is not available globally
function Bear() {
    let weight = 800

    // this is a privileged method that has access to the private variable hatchedEgg
    this.getWeight = function() {
        return weight
    }
}
