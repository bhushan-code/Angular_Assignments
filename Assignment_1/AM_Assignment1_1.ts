function Maximum(Value1 : number , Value2 : number , Value3 : number) : number
    {
        var Ans : number = 0
        Ans = Value1 > Value2 ? Value1 : Value2
        Ans = Value3 > Ans ? Value3 : Ans
        
        return Ans
    }


var Max : number = 0


Max = Maximum(23, 89, 6)

console.log("Maximum number is "+Max)