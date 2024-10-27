function ChkString(input : string): void
{
    if (input.search("Marvellous"))
    {
        console.log(`String contains Marvellous in it.`);
    } 
    else 
    {
        console.log(`String does not contain Marvellous.`);
    }
}

var sInput: string = "Pune Kothrud Marvellous Infosystems";

ChkString(sInput);