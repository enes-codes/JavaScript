/*
    const fullName = "Enes Pak";

    let firstName = fullName.slice(0,4);
    let lastName = fullName.slice(5,8);

    let firstChar = firstName.slice(0,1);
    let lastChar = lastName.slice(-1);

    console.log(firstName);
    console.log(lastName);
*/

/*
    const fullName = "Enes Pak";
    let firstName = fullName.slice(0, fullName.indexOf(" "));
    let lastName = fullName.slice(0, fullName.indexOf(" ")+1);
    console.log(firstName);
    console.log(lastName);
*/

const mail = "EnesPak@gmail.com";

let username = mail.slice(0 , mail.indexOf("@"));
let extension = mail.slice(mail.indexOf("@") + 1);

console.log(username);
console.log(extension);
