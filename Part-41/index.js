
    class Animal {
        constructor(name, age){
            this.name = name;
            this.age = age
        }

        move(speed){
            console.log(`The ${this.name} moves at a speed of ${speed}kmh.`);
        }
    }

    class Rabbit extends Animal {
        constructor(name, age, runSpeed){
            super(name, age);
            this.runSpeed = runSpeed;
        }

        run(){
            console.log(`The ${this.name} can run`);
            super.move(this.runSpeed);
        }
    }

    class Fish extends Animal {
        constructor(name, age, swimSpeed){
            super(name, age);
            this.swimSpeed = swimSpeed;
        }

        swim(){
            console.log(`The ${this.name} can swim`);
            super.move(this.swimSpeed);
        }
    }

    class Hawk extends Animal {
        constructor(name, age, flySpeed){
            super(name, age);
            this.flySpeed = flySpeed;
        }

        fly(){
            console.log(`The ${this.name} can fly`);
            super.move(this.flySpeed);
        }
    }

    const rabbit = new Rabbit("Rabbit",1,25);
    const fish = new Fish("Fish",2,12);
    const hawk = new Hawk("Hawk",3,50);

    fish.swim();
    rabbit.run();
    hawk.fly();