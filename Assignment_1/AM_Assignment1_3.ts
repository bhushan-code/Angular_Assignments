function DisplayFactor(Value1 : number) : void
    {
        if(Value1 < 0)
            {
                Value1 = -Value1;
            }

        var nCnt : number = 0

        for (nCnt = 1; nCnt <= Value1 / 2; nCnt++)
        {
            
            if (Value1 % nCnt == 0) 
            {
                console.log(nCnt);
            }
        }
    
        
        console.log(Value1);            // Every number is a factor of itself
    }


var nNo : number = 20

DisplayFactor(nNo)
