//       Primitive

// 7 categories: String, number, boolean, null, 
// Undefined, Symbol, BigInt

const score=90

//JS is a dynamic type kina bhane variable 
// declare garda datatype lekhna pardaina
// automatically js le thapauxa

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);


const bigNumber = 333329999999999992222222229n


//      Reference (Non-primitive)

// Array, Objects, Functions


const heros = ["IronMan", "Batman"];

let herooooo = {
    name: "kusal",
    age: 21
};


const myFunction= function(){
    console.log("Hellp World");

}

console.log(typeof myFunction )



// ***************Memory****************//


// Types of memory: Stack(Primitive), Heap(Non-primitivw)

let myClassName = "Bit 5th";

let anotherClassName = myClassName;
anotherClassName = "Bca 5th";

console.log(myClassName);
console.log(anotherClassName);

let student = {
    name: "kusal", 
    Faculty: "BIT"
}

let teacher= student
teacher.email="Kusal@gmail.com"
console.log(student.email)
console.log(teacher.email)



