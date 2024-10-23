let userName = "EnesPak";
console.log(`CharAt: `+userName.charAt(0));
console.log(`İndexOf: `+userName.indexOf("a"));
console.log(`LastİndexOf: `+userName.lastIndexOf("a"));
console.log(`Length: `+userName.length);

let userName1 = "   Enes";
userName1 = userName1.trim();
console.log(`Trim: `+userName1);

userName1 = userName1.toUpperCase();
console.log(`ToUpperCase: `+userName1);

userName1 = userName1.toLowerCase(3);
console.log(`ToLowerCase: `+userName1);

userName1 = userName1.repeat(3);
console.log(`Repeat: `+userName1);

let result = userName.startsWith(' ');
if (result) {
    console.log(`StartsWith: `+`Your username cant be begin with ' '`);
}else {
    console.log(`StartsWith: `+userName);
}

let result1 = userName.endsWith(' ');
if (result1) {
    console.log(`EndsWith: `+`Your username cant be end with ' '`);
}else {
    console.log(`EndsWith: `+userName);
}

let result2 = userName.includes(' ');
if (result2) {
    console.log(`İncludes: `+`Your username cant be include ' '`);
}else {
    console.log(`İncludes: `+userName);
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log("ReplaceAll: "+phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0");
console.log("PadStart: "+phoneNumber);