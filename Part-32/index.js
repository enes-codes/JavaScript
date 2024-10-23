/*
    let numbers = [1,2,3,4,5,6,7];
    let evenNumbers = numbers.filter(isEven);
    let oddNumbers = numbers.filter(isOdd);

    console.log("Even Num: ",evenNumbers);
    console.log("Odd Num: ",oddNumbers);

    function isEven(element){
        return element % 2 === 0;
    }

    function isOdd(element){
        return element % 2!== 0;
    }
*/

/*
    const ages = [16,17,18,19,20,60];
    const adults  = ages.filter(isAdult);
    const children = ages.filter(isChild);

    console.log("Adults: ",adults);
    console.log("Children: ",children);

    function isAdult(element){
        return element >= 18;
    }

    function isChild(element){
        return element < 18;
    }
*/

    const words = ["apple","orange","banana","kiwi","pomegranate","cocount"];
    const shortWords = words.filter(getShortWords);
    const longWords = words.filter(getLongWords);

    console.log("Short Words: ",shortWords);
    console.log("Long Words: ",longWords);

    function getShortWords(element){
        return element.length <= 6;
    }

    function getLongWords(element){
        return element.length > 5;
    }


