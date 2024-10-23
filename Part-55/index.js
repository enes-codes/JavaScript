/*
    try{
        console.log("Hello");
    }
    catch{
        console.error(error)
    }
    finally{
        console.log("This always executes")
    }

    console.log("You have reached the end");
*/

    try 
    {
        const dividend = Number(window.prompt("Enter a dividend: "));
        const divisor = Number(window.prompt("Enter a divisor: "));

        if (divisor == 0) {
            throw new Error("You can't divide by zero");            
        }
        if (isNan(dividend) || isNaN(divisor)) {
            throw new Error("Values must be number");
        }

        const result = dividend / divisor;
        console.log(result);
        
    } 
    catch (error) {
        console.error(error);
    }

    console.log("You have reached the end");

