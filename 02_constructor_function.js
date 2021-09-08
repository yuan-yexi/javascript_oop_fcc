// constructors are functions that create new objects
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
}

// create a new instance the Dog object
let max = new Dog('max', 'grey');

// verify an object's constructor with instanceof
console.log(max instanceof Dog)
// returns true

// understand own properties
// own properties are name, color, numLegs that
let ownProps = []

for (let prop in max) {
    if (max.hasOwnProperty(prop)) {
        ownProps.push(prop)
    }
}

console.log(ownProps)

// use prototype properties to reduce duplicate code
// prototype is shared among all instances of object Dog
// changing the prototype will change prop of all instances of obj
let spot = new Dog('spot', 'brown')

Dog.prototype.breed = 'husky'

console.log(max.breed)
console.log(spot.breed)

// iterate over all properties
// 2 kinds of properties so far: own props and prototypes
// own props are defined directly on the object instance itself
// prototyp properties are defined on the prototype
let prototypeProps = []

for (let prop in max) {
    if (max.hasOwnProperty(prop)) {
        ownProps.push(prop)
    } else {
        prototypeProps.push(prop)
    }
}

console.log(prototypeProps)

// understand the constructor property
// special constructor property located on the object instance
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true
    } else {
      return false
    }
}

console.log(joinDogFraternity(max))

// change the prototype to a new object
// a more efficient way to set multiple prototype props to object
function Bird(name) {
    this.name = name
}

Bird.prototype = {
    // a side effect of setting prototype manually is that it erases constructor property
    // to fix this we have to manually set the constructor when new prototype is set
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log('nom nom nom')
    },
    describe: function() {
      console.log('My name is ' + this.name)
    }
}

let tweeter = new Bird('tweeter')
tweeter.eat() // logs nom nom nom
console.log(tweeter.constructor === Bird) // evaluates to true

// to understand where an object's prototype comes from
console.log(Bird.prototype.isPrototypeOf(tweeter)) //evaluates to true

// understand the prototype chain
// almost all objects in JS have a prototype, and the prototype itself is an object
// this means that prototype can have its own prototype

// Bird is the supertype of tweeter
Bird.prototype.isPrototypeOf(tweeter) // evaluates to true
// Object is a supertype of both Bird and tweeter
Object.prototype.isPrototypeOf(Bird.prototype)
