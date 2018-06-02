// String
let myName: string = 'Max';

// Number
let myAge: number = 27;

// Boolean
let hasHobbies: boolean = false;


// Assign types
let myRealAge: number;
myRealAge = 27;

// Array
let hobbies: any = [200, 100];
hobbies = 'Hello world';


// Tuple
let address: [string, number] = ['String', 100];

// Enum
enum Color {
    One = 1,
    Two = 2,
    Theree = 3
}

let myColorString: string = Color[2];
let myColorNumber: Color = Color.Two;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Any array
let list: any[] = [1, true, "free"];
list[1] = 100;

// Void return
function warnUser(): void {
    console.log("This is my warning message");
}

warnUser();


// Null and Undefined
let u: undefined = undefined;
let n: null = null;

console.log(u);
console.log(n);



// Function
const returnMyname = (): number => {
    return myAge;
};

const voidFunction = (): void => {
    console.log('Return void function. KEKE');

};
console.log(returnMyname());

// Argument types
const argumentTypeFunction = (x: number, y: number): number => {

    return x * y;
};


// Functions as type
let myFunction: (a: number, b: number) => number;

myFunction = argumentTypeFunction;


// Object and types

let userData: {name: string, age: number} = {
    name: 'Max',
    age: 27
};

userData = {
    name: 'Happy new years',
    age: 33
}
console.log(userData);


// Putting all together to a complex object. :)
let complex: {data: number[], ouput: (all: boolean) => number[]} = {
    data: [1, 2, 3],
    ouput: function (all: boolean): number[] {
        return this.data;
    }
};


// Type Alias
type Complex = { data: number[], ouput: (all: boolean) => number[] };

let complex2: Complex = {
    data: [1, 2, 3],
    ouput: function (all: boolean): number[] {
        return this.data;
    }
};

console.log(complex2.ouput(false));


// Multi type with Union.
let myRealAgeReal : number | string = 23;
myRealAgeReal = 24;
myRealAgeReal = 'hello world';

console.log(myRealAgeReal);

// Check types
let finalValue = "A String";
console.log(typeof finalValue);





















