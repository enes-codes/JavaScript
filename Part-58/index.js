/*
    //---- First Element Child ----//
    const ulElements = document.querySelectorAll('ul');

    ulElements.forEach(ulElement => {
        const firstChild = ulElement.firstElementChild;
        firstChild.style.backgroundColor = "yellow";
    });
*/

/*
    //---- Last Element Child ----//

    const ulElements = document.querySelectorAll('ul');

    ulElements.forEach(ulElement => {
        const lastChild = ulElement.lastElementChild;
        lastChild.style.backgroundColor = "yellow";
    });
*/

/*
    //---- Next Element Sibling ---- //

    const element = document.getElementById("fruits");
    const nextSibling = element.nextElementSibling;
    nextSibling.style.backgroundColor = "yellow";
*/

/*
    //---- Previous Element Sibling ---- //

    const element = document.getElementById("vegetables");
    const prevSibling = element.previousElementSibling;
    prevSibling.style.backgroundColor = "yellow";
*/

/*
    //---- Parent Element ----//
    const element = document.getElementById("ice-cream");
    const parent = element.parentElement;
    parent.style.backgroundColor = "yellow";
*/

    //---- Child Element ----//
    const element = document.getElementById("fruits");
    const children = element.children;

    Array.from(children).forEach(child =>{
        child.style.backgroundColor = "yellow";
    });


