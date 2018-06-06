(function () {
    // Generic
    console.log('Generic wrap up');

    // Simple generic

    const echo = (data: any) => {
        return data;
    }

    // console.log(echo('Max'));
    // console.log(echo(12));
    // console.log(echo({name: 'Max'}));

    // Better generic
    const betterEcho = <T>(data: T) => {
        return data;
    }

    // console.log(betterEcho('Max').length);
    // console.log(betterEcho(<string>('17')));
    // Built-in generic type. Arrays
    const testResult1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const testResult2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // testResult1.push(12);
    // testResult2.push(12);

    // Generic Type and Array.
    const printAll = <T>(args: T[]) => {
        args.forEach((element) => console.log(element));
    }

    // printAll(['Apple', 'Banana']);

    // Using Generic Type.

    const echo2: <T>(data: T) => T = betterEcho;

    console.log(echo2<string>('Some things'));

    // Create Generic Class.

    class SimpleMathGeneric<T> {

        public baseValue: T;
        public multiplyValue: T;

        constructor(baseValue: T, multiplyValue: T) {
            this.baseValue = baseValue;
            this.multiplyValue = multiplyValue;
        }

        cal(): number {
            return +this.baseValue * +this.multiplyValue;
        }
    }

    const simpleMath = new SimpleMathGeneric<number>(12, 23);
    console.log(simpleMath.cal());

    // Constraint.
    class ConstraintClass<T extends number | string> {
        baseValue: T;

        cal(): T {
            return this.baseValue;
        }
    }

    const constraintClass = new ConstraintClass<string>();
    constraintClass.baseValue = 'Text Here';
    console.log(constraintClass.cal());

    // Using more generic.
    class MoreGenericClass<T extends number | string, U extends (string | number)> {
        baseValue: T;
        rootValue: U;

        calBase(): T {
            return this.baseValue;
        }

        calRoot(): U {
            return this.rootValue;
        }
    }

    const moreGenericObject = new MoreGenericClass<number, string>();
    moreGenericObject.baseValue = 100;
    moreGenericObject.rootValue = 'Hello world';

    console.log(moreGenericObject.calBase());
    console.log(moreGenericObject.calRoot());

    class MyMap<T> {
        private _map: { [key: string]: T } = {};

        get map(): { [p: string]: T } {
            return this._map;
        }

        set map(value: { [p: string]: T }) {
            this._map = value;
        }

        getItem(key: string) {
            return this.map[key];
        }

        setItem(key: string, item: T) {
            this.map[key] = item;
        }

        clear() {
            this.map = {}
        }

        printMap() {
            for (let key in this.map) {
                console.log(key, this.map[key]);
            }
        }
    }

    const myMap = new MyMap<number>();
    myMap.map = {'banana': 100, 'Tomato': 200};

    console.log(myMap.map);

    const ItemMap = new MyMap<string>();
    ItemMap.setItem('Hourse', 'Four Legs');
    console.log(ItemMap.getItem('Hourse'));

    console.log('Before Clear');
    ItemMap.clear();
    ItemMap.printMap();

})();
