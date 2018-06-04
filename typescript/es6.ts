console.log('ES6');

// Let and const

var variable = 'Test';
variable = 'Hello world';
console.log(variable);

const constVariable = 100;
console.log(constVariable);

// Block scope.

function rest() {
    let variable = null;
    console.log(variable);
}

rest();
console.log(variable);


// Arrow Function.
console.log("Arrow Function");

const multiplyNumbers = (number1: number, number2: number): number => {
    return number1 * number2;
};

console.log(multiplyNumbers(2, 4));

const greet = () => {
    // console.log('Hello world');
};

greet();

// Arrow function variation.

const greetFriend = (friend: string) => console.log(friend);
greetFriend("hello world");

// Function and default parameters.
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10) => {
    while (start > 0) {
        start--;
    }

    console.log("Done!!", start);
};

countdown();

// Rest and Spread Operator.
console.log("Rest and spread Operator");
const numbers = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...numbers));

const makeArray = (name: string, ...args: number[]) => {
    return [name, ...args];
};
console.log(makeArray("Max by the way",1, 2, 3, 6));


// Destructuring Arrays
console.log("Destructuring");
const myHobbies = ["Cooking", "Sprots"];
console.log(...myHobbies);
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// Destructuring Objects.
const data = { userName: "Max", age: 27 };
const { userName: x, age: y} = data;
console.log(x, y);

// Template Literal
const namae = "Max";
const greeting = `Hello ${namae}. This is cool!`;
console.log(greeting);

