/*
    const person = {
        fullName: "Enes Pak",
        age: 21,
        isStudent: true,
        hobbies: ["Karate","Jelly Fishing","Cooking"],
        address:{
            street: "124 Conch St.",
            city: "Bikini Bottom",
            country: "Int. Water"
        }
    }

    console.log(person.fullName);
    console.log(person.age);
    console.log(person.isStudent);
    console.log(person.hobbies[0]+","+person.hobbies[1]+","+person.hobbies[2]);

    for(const property in person.address){
        console.log(person.address[property]);
    }
*/

    class Person {
        constructor(name,age, ...address){
            this.name = name;
            this.age = age;
            this.address = new Address(...address);
        }
    }

    class Address {
        constructor(street, city, country){
            this.street = street;
            this.city = city;
            this.country = country;
        }
    }

    const person = new Person("Enes Pak",22,
                                        "124 Conch St.",
                                        "Bikini Bottom",
                                        "Int. Water");

    console.log(person.name + " ," + 
                person.age + " ," + 
                person.address.street + " ," + 
                person.address.city + " ," + 
                person.address.city + " ," + 
                person.address.country
    );