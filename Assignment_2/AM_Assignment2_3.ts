function Max(Arr) : number
{
    var SecondLarge : number = 0
    var Large : number = Arr[0]
    var iCnt : number = 1

    for(iCnt = 1; iCnt <= Arr.length; iCnt++)
    {
        if(Large < Arr[iCnt])
        {
            SecondLarge = Large
            Large = Arr[iCnt]
        } else if(SecondLarge < Arr[iCnt]) 
        {
            SecondLarge = Arr[iCnt]
        }
    }
    return SecondLarge
}


var data: number[] = [23,89,6,29,56,45,77,80]

var nRet : number = 0

nRet = Max(data)
console.log("Second largest number is :"+nRet)