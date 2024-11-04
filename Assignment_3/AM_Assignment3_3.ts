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

class CircleX extends Circle
{
    
    Circumference()
    {
        var Ans : number = 0
        Ans = this.Radius * this.PI * 2
        return Ans
    }
}



var ACircle : number = 0
var CCircle : number = 0

var obj1 = new CircleX(15)
var obj2 = new CircleX(21)

ACircle = obj1.Area()
CCircle = obj1.Circumference()

console.log("Area of Circle is : "+ACircle)
console.log("CIrcumference of Circle is : "+CCircle)

ACircle = obj2.Area()
CCircle = obj2.Circumference()

console.log("Area of Circle is : "+ACircle)
console.log("CIrcumference of Circle is : "+CCircle)
