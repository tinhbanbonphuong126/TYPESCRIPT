(function () {
    interface FirstName {
        firstName: string,
        lastName?: string,
        [propName: string]: any
    }

    const face = (people: FirstName): void => {
        console.log(`Hello ${people['firstName']}`);
    };


    const changeFace = (people: FirstName): void => {
        people.firstName = 'Changed First';
    };

    let people = {
        firstName: 'Pham',
        lastName: 'Que'
    };

    face({firstName: 'First'});
    face({firstName: 'First', lastName: 'Last', randomName: 'Random'});
    changeFace(people);
    face(people);
})();