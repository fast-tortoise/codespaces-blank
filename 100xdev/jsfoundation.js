console.log("i am a man.")

arr = [1,2,3,4,5,6]

arr.forEach(element => {
    console.log(element*2);
});

function multiply(a){
    console.log(a*9)
}

arr.forEach(multiply);

// c# equivalent
// string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
// foreach (string i in cars) 
// {
//   Console.WriteLine(i);
// }

class Animal{
    constructor(health){
        this.name = "varun"
        this.age = 24
        this.health = health
    }
    
    // an understanding of a static function:
    // The property or the function that is static is associated to the class itself, and not with the object of the class.
    // i.e. the properties of an object and vary with the object, but if static methods are updated, in case, it will be reflected
    // across all the object of the class. 
    // an understanding: static stuffs are unaffected by object level updates.
    static getType(){
        console.log("Dangerous")
    }
    getAge(){
        console.log(this.age)
    }

    // this will create ambiguity between property name and method
    // age(){
    //     console.log(this.age)
    // }

    getHealth(){
        console.log(this.health)
    }
}

animal =new Animal("good")
animal.getAge();
animal.getHealth();
console.log(animal.name)
Animal.getType()


const enemy = {
    name : "varun",
    strength : "warrior",
}

const strEnemy = JSON.stringify(enemy)

console.log(strEnemy)

const parseEnemy = JSON.parse(strEnemy)
console.log(parseEnemy["name"])

// this will give error as name should be "name", but stringyfy takes care of this, and extra comms also
// const parseEnemy = JSON.parse(enemy)

const basicData = {
    name: "varun",
    age: "24"
}

const additionalData = {
    place: "blr",
    enery: "hig and low"
}

let newObj = Object.assign({}, basicData, additionalData)
console.log(newObj) 


const testData = {
    name: "varun",
    age: "24",
    randomNum: 103,
    additionalData : {
        place: "blr",
        enery: "hig and low"
    }
}

console.log(Object.keys(testData))
console.log(Object.values(testData))
console.log(Object.keys(testData.additionalData))

console.log(Object.keys(testData.age)) // [ '0', '1' ]
// The code Object.keys(testData.age) returns ['0', '1'] 
// because testData.age is a string, and Object.keys() when applied to a string treats each character as a property with a numeric index.

console.log(Object.keys(testData.randomNum)) // []
//  Object.keys() is designed to work with objects and returns the keys of those objects.  Integers are primitive values, not objects.



function sumofsomething(a,b,call){
    console.log(a)
    console.log(b)
    console.log(call)
    var calling = call(a)
    console.log(calling)
}

sumofsomething(4,5, (n) => {return n*n})