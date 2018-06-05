(function () {
    // Generic
    console.log('Generic wrap up');

    // Simple generic

    const echo = (data: any) => {
        return data;
    };

    // console.log(echo("Max"));
    // console.log(echo(12));
    // console.log(echo({name: 'Max'}));
    
    // Better generic
    const betterEcho = <T>(data: T) => {
        return data;
    };

    // console.log(betterEcho("Max").length);
    // console.log(betterEcho(<string>("17")));


    // Built-in generic type. Arrays
    const testResult1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const testResult2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // testResult1.push(12);
    // testResult2.push(12);


    // Generic Type and Array.
    const printAll = <T>(args: T[]) => {
        args.forEach((element) => console.log(element));
    };

    printAll(["Apple", "Banana"]);

})();