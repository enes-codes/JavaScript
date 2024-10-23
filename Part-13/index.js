/*
    let day = 1;

    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log(`${day} is not a day`);
            break;
    }
*/

    let testScore = 92;
    let letterGrade;

    switch (true) {
        case testScore >= 90:
            letterGrade = "A";
            break;
        case testScore >= 80:
            letterGrade = "B";
            break;
        case testScore >= 70:
            letterGrade = "C";
            break;
        case testScore >= 60:
            letterGrade = "D";
            break;
        case testScore >= 50:
            letterGrade = "E";
            break;
        default:
            letterGrade = "F";
            break;
    }

    console.log(letterGrade);