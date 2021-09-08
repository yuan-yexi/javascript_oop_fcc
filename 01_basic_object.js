// objects in JS help to model real world objects
let dog = {
	name: 'max',
	numLegs: 4,
	// creating a method in an object
	// use 'this' to access properties of object within the context
	sayLegs: function() {
		return "This dog has " + this.numLegs + " legs."
	}
}

// using dot notation to access objects
console.log(dog.name)
console.log(dog.numLegs)
console.log(dog.sayLegs())
