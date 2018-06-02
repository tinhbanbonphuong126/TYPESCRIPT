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

console.log(returnMyname());
