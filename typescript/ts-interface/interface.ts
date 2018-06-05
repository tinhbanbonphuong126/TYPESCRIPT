(function () {
    interface FirstName {
        firstName: string,
        lastName: string,
        [propName: string]: any,

        aisatsu(lastName: string): void;
    }

    const face = (people: FirstName): void => {
        console.log(`Hello ${people['firstName']}`);
    };


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

})();