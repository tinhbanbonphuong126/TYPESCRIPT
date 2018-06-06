/**
 * Decorator Function Class.
 * @param {Function} constructorFn
 */
const logged = (constructorFn: Function) => {
    console.log(constructorFn)
}

/**
 * Class product
 */
@logged
class Product1 {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const bag = new Product1('Bag', 20)
// console.log(bag)

/**
 * Decorator Factory
 * @param {boolean} value
 * @returns {(constructorFn: Function) => void}
 */
const logging = (value: boolean): any => {
    return value ? logged : null
}

@logging(true)
class Car {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

/**
 * Advance Factory Decorator.
 * @param {Function} constructorFn
 */
const printable = (constructorFn: Function) => {
    constructorFn.prototype.print = function () {
        console.log(this)
    }
}

// Using multiple decorator.
@logging(true)
@printable
class Plant {
    name: string = 'Greed Plant'
    price: string = '2000$'
}

let plant = new Plant();
(plant as any).print()

/**
 * Method Decorator
 * @param {boolean} value
 * @returns {() => any}
 */
const editable = (value: boolean) => {
    return (target: any, propName: string, descriptor: PropertyDescriptor) => {
        descriptor.writable = value
    }
}

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class EditableDecorator {
    @overwritable(false)
    projectName: string = 'Pham Que'
    @overwritable(true)
    overwriteable: string = 'Que Pham'

    constructor (projectName: string) {
        this.projectName = projectName
    }

    @editable(false)
    calcBudget() {
        console.log(this.projectName)
    }
}

const editableDecorator = new EditableDecorator('Haguruma Project')
editableDecorator.calcBudget()
editableDecorator.calcBudget = () => {
    console.log(2000)
}
editableDecorator.calcBudget()
console.log('Property Overwirteable')
console.log(editableDecorator)
editableDecorator.overwriteable = 'Can be'
console.log(editableDecorator.overwriteable)
editableDecorator.projectName = 'Unavaiable'
console.log(editableDecorator.projectName)

// Parameter Decorator
const printInfo = (target: any, methodName: string, paramIndex: number) => {
    console.log(`Target ${target}`)
    console.log(`Method Name ${methodName}`)
    console.log(`Parameter Index ${paramIndex}`)
};
class Course {
    name: string

    constructor(name?: string) {
        // Check parameter is exist or not.
        if (name === undefined) {

        } else {
            this.name = name;
        }
    }

    printStudentNumbers (mode: string, name: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(1000)
        } else {
            console.log(2000)
        }
    }
}

const course1 = new Course('Laravel')
console.log(course1)
const course2 = new Course()
console.log(course2)

course1.printStudentNumbers('anything', 'name', true)
course1.printStudentNumbers('anything', 'name', false)



























