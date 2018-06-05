(function () {
    interface FirstName {
        firstName: string,
        lastName?: string,
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

})();