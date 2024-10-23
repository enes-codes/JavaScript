    const myHeading = document.getElementById("my-heading");
    myHeading.style.backgroundColor = "yellow";
    myHeading.style.textAlign = "center";

    console.log(myHeading);


    const fruits = document.getElementsByClassName("fruits");

    for (let fruit of fruits) {
        fruit.style.backgroundColor = "yellow";
    }


    const h4Elements = document.getElementsByTagName("h4");
    const liElements = document.getElementsByTagName("li");

    for (let h4Element of h4Elements) {
        h4Element.style.backgroundColor = "yellow";
    }

    for (let liElement of liElements) {
        liElement.style.backgroundColor = "lightgreen";
    }


    const element = document.querySelector("ul");
    element.style.backgroundColor = "lightgreen";


    const foods = document.querySelectorAll("li");
    foods[5].style.backgroundColor = "lightgreen";