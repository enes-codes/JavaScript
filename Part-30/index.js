
    let numbers = [ 1, 2, 3, 4, 5 ];

    function double(element, index, array){
        array[index] = element *2;
    }

    function trriple(element, index, array){
        array[index] = element *3;
    }

    function square(element, index, array){
        array[index] = Math.pow(element, 2);
    }

    function display(element){
        console.log(element);
    }

    function cube(element, index, array){
        array[index] = Math.pow(element, 3);
    }


    numbers.forEach("Double:" +double);
    numbers.forEach("Triple: "+trriple);
    numbers.forEach("Square: "+square);
    numbers.forEach("Display: "+display);
    numbers.forEach("Cube: "+cube);

