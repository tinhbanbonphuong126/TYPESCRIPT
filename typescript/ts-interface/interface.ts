(function () {
    interface FirstName {
        firstName: string
    }

    const face = (people: FirstName): void => {
        console.log(`Hello ${people['firstName']}`);
    };


    const changeFace = (people: FirstName): void => {
        people.firstName = 'Hello world';
    };

    let people = {
        firstName: 'Pham',
        lastName: 'Que'
    };

    face(people);
    changeFace(people);
    face(people);
})();