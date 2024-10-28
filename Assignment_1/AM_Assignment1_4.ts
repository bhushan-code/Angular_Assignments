function ChkPrime(Value1: number): boolean 
{
   
    for (let i = 2; i <= Value1 / 2; i++)
    {
        if (Value1 % i == 0)
        {
            return false; 
        }
    }
    return true; 
}

var nNo: number = 11; 

if (ChkPrime(nNo)) 
{
    console.log("It is a prime number")
}
else 
{
    console.log("It is not a prime number")
}