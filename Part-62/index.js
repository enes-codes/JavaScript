
    const myButton = document.getElementById('myButton');
    const myImg = document.getElementById('myImg');

    myButton.addEventListener('click', event => {

        if(myImg.style.display == 'none') { // hidden
            myImg.style.display = 'block';  // visible
            myButton.textContent = 'Hide';
        } 
        else{
            myImg.style.display = 'none';  // hidden
            myButton.textContent = 'Show';
        }

    });
