class Arthmetic
{
    Number1 : number
    Number2 : number

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1
        this.Number2 = No2
    }
    Addition() : number
    {
        var Ans : number = 0
        Ans = this.Number1 + this.Number2
        return Ans
    }
    Substraction() : number
    {
        var Ans : number = 0
        Ans = this.Number1 - this.Number2
        return Ans
    }
    Multiplication() : number
    {
        var Ans : number = 0
        Ans = this.Number1 * this.Number2
        return Ans
    }
    Division() : number
    {
        var Ans : number = 0
        Ans = this.Number1 / this.Number2
        return Ans
    }
}

var Result : number = 0

var obj = new Arthmetic(25,50)

Result = obj.Addition()
console.log("Addition is : "+Result)

Result = obj.Substraction()
console.log("Substraction is : "+Result)

Result = obj.Multiplication()
console.log("Multiplication is : "+Result)

Result = obj.Division()
console.log("Division is : "+Result)