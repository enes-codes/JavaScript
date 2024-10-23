/*
    class MathUtil{
        static PI = 3.14159;

        static getDiameter(radius){
            return radius * 2;
        }

        static getCircumference(radius){
            return 2 * this.PI * radius;
        }

        static getArea(radius){
            return this.PI *radius * radius;
        }
    }

    console.log("Pi: ",MathUtil.PI);
    console.log("Diameter: ",MathUtil.getDiameter(3));
    console.log("Circumference: ",MathUtil.getCircumference(3));
    console.log("Area: ",MathUtil.getArea(3));
*/

    class User{
        static userCount = 0;

        constructor(username){
            this.username = username;
            User.userCount++;
        }

        static getUserCount(){
            console.log(`There are ${User.userCount} users online`);
        }
    }

    const user1 = new User("Enes Pak");
    const user2 = new User("Ali Pak");
    const user3 = new User("Mehmet Pak");
    const user4 = new User("Ebru Pak");

    User.getUserCount();