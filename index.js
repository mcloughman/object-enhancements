// Same keys and values
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => ({firstName, lastName});

// Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
const favoriteNumber = 42;
const instructor = {
    [favoriteNumber]: "That is my favorite!"
}

// Object Methods

// var instructor1 = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructor1 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, method, noise) {
    return {
        species,
        [method]() {
            return `${noise}`
        }

    }
}

const myDuck = (createAnimal("duck", "call", "quack"));
console.log(myDuck)