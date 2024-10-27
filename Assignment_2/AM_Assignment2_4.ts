function ChkArmstrong(nNo : number): number 
{
    var nSum: number = 0
    var nDigit : number =0


    while (nNo > 0)
    {
        nDigit = nNo % 10
        nSum = nSum + (nDigit * nDigit * nDigit)
        nNo = Math.floor(nNo / 10)
    }
    return nSum;
}

var nValue: number = 370

var nResult: number = 0
nResult = ChkArmstrong(nValue)

if (nResult == nValue)
    {
        console.log("It is an Armstrong number.")
    }
else 
    {
        console.log("It is not an Armstrong number.")
    }
