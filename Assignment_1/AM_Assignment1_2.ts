function Area(Value1 : number, Value2 : number = 3.14 ) : number
    {
        var Area : number = 0
        Area = Value2* Value1 *Value1    
        return Area
    }


var Radius : number = 5
var PI : number = 3.14

var AreaCircle : number = 0

AreaCircle = Area(Radius, PI)

console.log("Area of circle is "+AreaCircle)