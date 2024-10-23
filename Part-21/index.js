    function happBirthday (username, age){
        console.log("Happy Birth Day To You");
        console.log(`Happ Birth Day Dear ${username}`);
        console.log(`You are ${age} years old`);
    }

    happBirthday("ENES PAK", 21);
    happBirthday("ALİ PAK" , 27);

    function add(x,y){
        return x + y;
    }
    console.log("Add: " + add(2,3));

    function subtract(x,y){
        return x - y;
    }
    console.log("Subtract: " + subtract(2,3));

    function multiply(x,y){
        return x * y;
    }
    console.log("Multiply: " + multiply(2,3));

    function divide(x,y){
        return x / y;
    }
    console.log("Divide: " + divide(2,3));

    function isEven(number){
        return number % 2 == 0 ? true : false;
    }
    console.log("IsEven: " + isEven(12));

    function isValidEmail(email) {
        return email.includes("@") ? true : false;
    }
    console.log("IsValidEmail: " + (isValidEmail("EnesPak@gmail.com")));
    console.log("IsValidEmail: " + (isValidEmail("EnesPak.com")));