
    const person1 = {
        firstName: "Enes",
        lastName: "Pak",
        age: 21,
        isEmployed: true,
        sayHello: function(){console.log(person1.firstName + " " + person1.lastName + " " + person1.age + " " + person1.isEmployed )}
    }

    const person2 = {
        firstName: "Ali",
        lastName: "Pak",
        age: 28,
        isEmployed: true,
        sayHello: function(){console.log(person2.firstName + " " + person2.lastName + " " + person2.age + " " + person2.isEmployed )}
    }

    person1.sayHello();
    person2.sayHello();