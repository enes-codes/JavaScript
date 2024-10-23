    const numbers =  [1,2,3,4,5,6,7,8,9];

    const squares = numbers.map(function(element) {
        return Math.pow(element, 2);
    });
    const cubes = numbers.map(function(element) {
        return Math.pow(element, 3);
    });
    const evenNumbers = numbers.map(function(element) {
        return element % 2 === 0;
    });
    const oddNumbers = numbers.map(function(element) {
        return element % 2!== 0;
    });
    const totalNumbers = numbers.map(function(accumulator,element) {
        return accumulator+element;
    });

    console.log("Square: ",squares);
    console.log("Cube: ",cubes);
    console.log("Even: ",evenNumbers);
    console.log("Odd: ",oddNumbers);
    console.log("Total: ",totalNumbers);