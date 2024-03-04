
// JavaScript is Dynamic

// Primitive(Valuetype):       
// String                     
// null
// undefined (a type and value)
// Boolean
// Number

// Reference type:
// Objects, Arrays and Function

let name = "Saif";
let id = 5;                //0.5
let isApproved = false;
let firstName = undefined;
let selectColor = null; // Object
// change and check variable type using 'typeof'  


let person = {
    name: 'Ali',
    id: 1 
};
console.log(person.name);
// updating Object using Dot Notation
person.name = 'Hassan';
console.log(person.name);


// updating Object using Bracket Notation (we use bracket notation when 
// we are not sure, which value user will update)

let selection = 'name'; 
person[selection] = 'saif'
console.log(person.name);
person['name'] = 'Ayub';
console.log(person.name);

// Arrays
let selectColors = ['Green', 'Orange']; // type of this array is object (check properties using '.' operaters)
// selectColors[5] = 'Blue'; // add 1
// console.log(selectColors);

// split function
let text = "Some Text"
text.split(" ")