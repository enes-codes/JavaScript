/*
    let fruits = ["Apple", "Orange", "Banana", "Cocount", "Pine Apple"];
    fruits.sort();
    console.log(fruits);
*/

/*
    let numbers = [1,10,2,9,3,8,4,7,5,6];
    numbers.sort((a, b) => b-a);
    console.log(numbers);
*/

    const people = [{name: "Enes Pak", age:22, gpa: 3.0},
                    {name: "Ali Pak,", age:28, gpa:1.5},
                    {name: "Mehmet Pak,", age:45, gpa:2.5},
                    {name: "Ebru Pak,", age:57, gpa:4.0}
                    ]

    people.sort((a,b) => b.name.localeCompare(a.name));
    console.log(people);