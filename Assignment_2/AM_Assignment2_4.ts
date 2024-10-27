function ChkArmstrong(No : number): number 
{
    var Sum: number = 0

    while (No > 0)
    {
        var remainder = No % 10
        Sum += remainder ** 3
        No = Math.floor(No / 10)
    }
    return Sum;
}

var No: number = 153

var Result: number = ChkArmstrong(No)

if (Result == No)
    {
        console.log("It is an Armstrong number.")
    }
else 
    {
        console.log("It is not an Armstrong number.")
    }
