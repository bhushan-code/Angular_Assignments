function Fibonacci(nNo: number): void
 {
    var nFib1 : number = 0
    var nFib2 : number = 1
    var nFibn : number = 0

    // First Fibonacci number start from o
    if (nNo >= nFib1) {
        console.log(nFib1)
    }

    // Secon Fibonacci number is 1
     if (nNo >= nFib2) {
        console.log(nFib2)
    }

    nFibn = nFib1 + nFib2

    while (nFibn <= nNo) {
        console.log(nFibn);
        nFib1 = nFib2;
        nFib2 = nFibn;
        nFibn = nFib1 + nFib2;
    }
}

Fibonacci(21)