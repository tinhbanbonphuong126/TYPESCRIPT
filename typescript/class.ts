// Class
console.log("Class Introduction");

class Person {
    public name: string;
    private _type: string;
    protected _age: number;


    constructor(name: string, public username: string ="Username") {
        this.name = name;
    }


    get age(): number {
        console.log(this.type);
        return this._age;
    }

    set age(value: number) {
        this._age = value;
        this.type = "Private Type";
    }


    private set type(value: string) {
        this._type = value;
    }

    private get type(): string {
        return this._type;
    }
}

let person = new Person("Max");

console.log(person);

console.log(person.name);
console.log(person.username);

// Class method and access modifiers
person.age = 103;
console.log(person.age);


// Inheritance
console.log('INHERITANCE');

class Student extends Person{
    name = "Max";


    constructor(name: string) {
        super(name);
    }
}

let Max = new Student("Max");
console.log(Max);

// Inheritance and Constructor.
// ~~~~~~~~~

// Getter and Setter.
// ~~~~~~~~~

// Static Properties and Method.
class Helper {
    static PI: number = 3.14;

    static calcCirl(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helper.calcCirl(3));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {


    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();

newProject.budget = 1000;
newProject.changeName("Hello world");
console.log(newProject.calcBudget());

// Private Constructor and Singletons
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }
    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

let right = OnlyOne.getInstance();

console.log(right.name);

// Readonly Properties.
























