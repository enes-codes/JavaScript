
    let buttons = document.querySelectorAll(".myButtons");
/*
    // ---- Add Html/Css Properties ---- //
    buttons.forEach(button =>{
        button.style.backgroundColor = "green";
        button.textContent = " 😁 ";
    });  
*/

/*
    // ---- Click event listeners ---- //
    buttons.forEach(button =>{
        button.addEventListener("click", event => {
            button.style.backgroundColor = "red";
        });
    });
*/

/*
    // ---- Mouse event listeners ---- //
    buttons.forEach(button =>{
        button.addEventListener("mouseover", event => {
            button.style.backgroundColor = "hsl(205,100%,40%)";
        });
        button.addEventListener("mouseout", event => {
            button.style.backgroundColor = "hsl(205,100%,60%)";
        });
    });
*/

/*
    // ---- Add an elements ---- //
    const newButton = document.createElement("button");  // step 1
    newButton.textContent = "Button - 5";  // step 2
    newButton.classList = "myButtons";  // step 2
    document.body.appendChild(newButton);  // step 3
    buttons = document.querySelectorAll(".myButtons");
*/

    // ---- Remove an elements ---- //
    buttons.forEach(button =>{
        button.addEventListener("click", event => {
            event.target.remove();
            buttons = document.querySelectorAll(".myButtons");
        });
    });