// Introduction to Namespaces
var MyMath;
(function (MyMath) {
    function helloCircle() {
        return 'Hello circle';
    }
    MyMath.helloCircle = helloCircle;
})(MyMath || (MyMath = {}));
// Introduction to Namespaces
var MyMath;
(function (MyMath) {
    function helloRectangle() {
        return 'Hello Rectangle';
    }
    MyMath.helloRectangle = helloRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.helloCircle());
console.log(MyMath.helloRectangle());
