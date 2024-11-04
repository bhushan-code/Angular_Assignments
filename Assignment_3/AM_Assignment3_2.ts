class Circle
{
    Radius : number
    PI : number
    
    constructor(R : number, P : number = 3.14)
    {
        this.Radius = R
        this.PI = P
    }

    Area()
    {
        var Ans : number = 0
        Ans = this.Radius * this.Radius * this.PI
        return Ans
    }
}

var Result : number = 0

var obj1 = new Circle(10)
var obj2 = new Circle(20)

Result = obj1.Area()
console.log("Area of Circle is : "+Result)

Result = obj2.Area()
console.log("Area of Circle is : "+Result)
