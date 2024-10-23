
    const myBox = document.getElementById('myBox');

    myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = " Ouch 🤕 ";
    });

    myBox.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = " Don't do it 😲 ";
    });

    myBox.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightblue";
        event.target.textContent = " Click Me 😀 ";
    });

    const myButton = document.getElementById("myButton");

    myButton.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = " Ouch ";
    });

    myButton.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = " Don't do it ";
    });

    myButton.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightblue";
        event.target.textContent = " Click Me ";
    });