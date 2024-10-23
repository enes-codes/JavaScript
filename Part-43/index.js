/*
    let a = 1;
    let b = 2;

    [a, b] = [b, a];

    console.log(a);
    console.log(b);
*/

/*
    const colors =  ["red", "green", "blue", "yellow", "black", "white"];
    [colors[0], colors[1]] = [colors[4], colors[0]];
    console.log(colors);
*/

/*
    const colors =  ["red", "green", "blue", "yellow", "black", "white"];
    const [firstColor,secondColor,thirdColor, ...extraColor] = colors;
    console.log(firstColor);
    console.log(secondColor);
    console.log(thirdColor);
    console.log(extraColor);
*/

    function displayPerson({firstName, lastName, age, job="Unemployed"}){
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Age: ${age}`);
        console.log(`Job: ${job}`);
    }

    const person1 = {
        firstName: "Enes",
        lastName: "Pak",
        age: 21,
        job: "Software Engineering",
    }

    const person2 = {
        firstName: "Ali",
        lastName: "Pak",
        age: 28,
        job:"",
    }

    displayPerson(person1);
    displayPerson(person2);