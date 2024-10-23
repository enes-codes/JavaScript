/*
    function openFridge(...foods){
        console.log(foods);
    }

    function getFood(...foods){
        return foods;
    }

    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "HotDog";
    const food4 = "Sushi";
    const food5 = "Ramen";

    //openFridge(food1, food2, food3, food4, food5);

    const foods = getFood(food1, food2, food3, food4, food5);

    console.log(foods);
*/

/*
    function sum(...numbers){
        let result =0;
        for (let number of numbers) {
            result += number;
        }
        return result;
    }

    function getAverage(...numbers){
        let result =0;
        for (let number of numbers) {
            result += number;
        }
        return result / numbers.length;
    }

    const total = getAverage(75,100,85,90,50);

    console.log(total);
*/

    function combineStrings(...strings){
        return strings.join(" ");
    }

    const fullName = combineStrings("Enes","Pak","Yazılım","III");

    console.log(fullName);