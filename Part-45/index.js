    const fruits = [{name: "Apple", color:"Red", calories: 95},
                    {name: "Orange", color:"Orange", calories: 45},
                    {name: "Banana", color:"Yellow", calories: 105},
                    {name: "Cocount", color:"White", calories: 159},
                    {name: "Pine Apple", color:"Yellow", calories: 347}
    ];

    console.log("----- Foreach -----");
    fruits.forEach(fruit  => console.log(fruit.name +","+fruit.color+","+fruit.calories));

    console.log("----- Map -----");

    const fruitNames = fruits.map(fruit => fruit.name);
    const fruitColors = fruits.map(fruit => fruit.color);
    const fruitCalories = fruits.map(fruit => fruit.calories);
    console.log(fruitNames+","+fruitColors+","+fruitCalories);

    console.log("----- Filter -----");

    const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    console.log(yellowFruits,lowCalFruits,highCalFruits);

    console.log("----- Reduce -----");

    const maxFruits = fruits.reduce((max,fruit)=>
                                    fruit.calories > max.calories ?
                                    fruit : max);

    const minFruits = fruits.reduce((min,fruit)=>
                                    fruit.calories < min.calories ?
                                    fruit : min);

    console.log("Max Fruits:",maxFruits);
    console.log("Min Fruits:",minFruits);