function Maximum(...Values: number[]): number 
{
    var max = Values[0]

    var nCnt : number = 0
    
    for ( nCnt = 1; nCnt < Values.length; nCnt++)
    {
        if (Values[nCnt] > max) 
        {
            max = Values[nCnt]
        }
    }

    return max;
}

var nMax = Maximum(23, 89, 6, 29, 56, 45, 77)

console.log("Maximum number is", +nMax)