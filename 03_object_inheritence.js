// Object heritance to don't repeat yourself
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom")
    }
}

// to create the Animal Object and inherit it's prototype...
let beagle = Object.create(Animal.prototype)

// set the Child's prototype to an instance of the Parent
function Reptile(name) {
    this.name = name
}

Reptile.prototype = Object.create(Animal.prototype)

let croc = new Reptile("Croc")
croc.eat()

// when an object inherits its prototype from another object, it also inherits the supertype's constructor property
// to set all instances of Reptile to have constructor prop = Reptile and not animal
console.log(croc.constructor) // returns Animal
Reptile.prototype.constructor = Reptile
console.log(croc.constructor) // returns Reptile

// adding methods to object after inheritance
Reptile.prototype.swim = function() {
    console.log('waddle waddle waddle')
}

let alli = new Reptile("Alligator")
alli.swim()
croc.swim()

// override inherited methods
function Geko(name) {
    this.name = name
}

Geko.prototype = Object.create(Reptile.prototype)
Geko.prototype.swim = function() {
    console.log("Gekos can't swim.")
}

let geko = new Geko()
geko.swim()
