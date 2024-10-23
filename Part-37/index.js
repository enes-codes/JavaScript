
    function Car (make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.drive = function(){console.log(`You drive the ${this.make}, ${this.model}, ${this.year}, ${this.color}`)}
    }

    const car1 = new Car("Ford", "Mustang",2024,"Red");
    const car2 = new Car("Chevrolet", "Camaro",2024,"Blue");
    const car3 = new Car("Dodge", "Charger",2024,"Silver");

    car1.drive();
    car2.drive();
    car3.drive();