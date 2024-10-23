/*
    let username = "";

    while (username === "" || username === "NULL"){
        username = window.prompt("Enter your username: ");
    }
    console.log(username);
*/

/*  
    let username;

    do{
        username = window.prompt("Enter your username: ");
    }while (username === "" || username === "NULL")
    console.log(username);
*/

/*
    let loggedIn = false;
    let username;
    let password;

    while (!loggedIn) {
        username = window.prompt("Enter your username: ");
        password = window.prompt("Enter your password: ");

        if (usrname === "myUserName" && password === "myPassword") {
            loggedIn = true;
            console.log("You are logged in");
        }else{
            console.log("Invalid credentials. Please try again");
        }
    }
*/

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if (usrname === "myUserName" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in");
    }else{
        console.log("Invalid credentials. Please try again");
    }
}while (!loggedIn)

