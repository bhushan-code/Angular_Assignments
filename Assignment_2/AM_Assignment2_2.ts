function Summation(...Values: number[]): number
{
    var sum : number = 0
    var nCnt : number = 0
    for ( nCnt = 0; nCnt < Values.length; nCnt++) 
    {
        sum += Values[nCnt]
    }

    return sum
}

var nSum = Summation(23,6,7,4,5,7);

console.log("Addition is", nSum);