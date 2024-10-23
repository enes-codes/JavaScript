/*
    // -------- Example 1 -------- //

    //// ---- Create the element ---- ////
    const newH1 = document.createElement("h1");

    //// ---- Add Attributes/Properties ---- ////
    newH1.id = "myH1";
    newH1.textContent = "Hello World";
    newH1.style.color = "tomato";
    newH1.style.textAlign = "center";

    //// ---- Append element to document ---- ////
    document.body.append(newH1);
    // document.body.prepend(newH1);
    // document.getElementById("box1").append(newH1);
    // document.getElementById("box2").prepend(newH1);

    //const box2 = document.getElementById("box2");
    //document.body.insertBefore(newH1, box2);

    //const boxes = document.querySelectorAll(".box");
    //document.body.insertBefore(newH1, boxes[0]);

    //// ---- Remove Html Element ---- ////
    document.body.removeChild(newLink);
    document.getElementById("box1").removeChild(newLink);
*/

    // -------- Example 2 -------- //

    //// ---- Create the element ---- ////
    const newListItem = document.createElement("li");

    //// ---- Add Attributes/Properties ---- ////
    newListItem.id = "Cocount";
    newListItem.textContent = "Cocount";
    newListItem.style.fontWeight = "bold";
    newListItem.style.backgroundColor = "red";

    //// ---- Append element to document ---- ////
    //document.body.append(newListItem);
    //document.body.prepend(newListItem);
    document.getElementById("fruits").appendChild(newListItem);
    //document.getElementById("fruits").prepend(newListItem);

    //const banana = document.getElementById("banana");
    //document.getElementById("fruits").insertBefore(newListItem, banana);

    //const listItems = document.querySelectorAll(".fruits li");
    //document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

    //// ---- Remove Html Element ---- ////
    //document.body.removeChild(newLink);
    //document.getElementById("fruits").removeChild(newListItem);