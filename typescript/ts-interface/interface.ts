(function () {
    interface FirstName {
        firstName: string,
        lastName: string,

        [propName: string]: any,

        aisatsu(lastName: string): void;
    }

    const face = (people: FirstName): void => {
        console.log(`Hello ${people['firstName']}`);
    }


    const changeFace = (people: FirstName): void => {
        people.firstName = 'Changed First';
    };

    let people = {
        firstName: 'Pham',
        lastName: 'Que',

        aisatsu(lastName: string): void {
            console.log(`Hello Last Name ${lastName}`);
        }
    };

    // face({firstName: 'First'});
    // face({firstName: 'First', lastName: 'Last', randomName: 'Random'});

    face(people);
    changeFace(people);
    face(people);

    people.aisatsu('Michel');

    // Interface with Class
    console.log("Interface with Class");

    class Pupil implements FirstName {
        [propName: string]: any;

        firstName: string;
        lastName: string;

        aisatsu(lastName: string): void {
            console.log('おはよございます' + lastName);
        }

    }

    let person = new Pupil();
    person.firstName = 'Pham';
    person.lastName = 'Que';

    person.aisatsu('Mark');

    // Interface and Function Type.
    interface DoubleValueFunc {
        (number1: number, number2: number): number;
    }

    let myDoubleFunction: DoubleValueFunc;
    myDoubleFunction = (number1: number, number2: number) => {
        return (number1 * number2);
    };

    console.log(myDoubleFunction(12, 13));

    // Interface Inheritance
    console.log('Interface Inheritance');

    interface AgedPerson extends FirstName {
        age: number,
        tall: number
    }

    let oldPerson: AgedPerson = {
        age: 100,
        tall: 200,
        firstName: "Age",
        lastName: "Person",
        aisatsu(lastName: string): void {
            console.log('Aged Person');
        }

    };

    oldPerson.aisatsu('Hello world');

})();














































