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

