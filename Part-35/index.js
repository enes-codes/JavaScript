    
    const numbers =  [1,2,3,4,5,6,7,8,9];

    const squares = numbers.map((element) => Math.pow(element, 2));
    const cubes = numbers.map((element) => Math.pow(element, 3));
    const evenNumbers = numbers.filter((element) => element % 2 === 0);
    const oddNumbers = numbers.filter((element) => element % 2!== 0);
    const totalNumbers = numbers.reduce((accumulator, element) => accumulator + element);

    console.log("Square: ",squares);
    console.log("Cube: ",cubes);
    console.log("Even: ",evenNumbers);
    console.log("Odd: ",oddNumbers);
    console.log("Total: ",totalNumbers);
    