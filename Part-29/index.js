/*
    hello(wait);

    function hello(callback) {
        console.log("Hello");
        callback();
    }

    function wait() {
        console.log("Wait");
    }

    function leave() {
        console.log("Leave");
    }

    function goodBye() {
        console.log("Good Bye");
    }
*/

    sum(displayConsole, 1,2);

    function sum(callback, a, b) {
        let result = a+b;
        callback(result);
    }

    function displayConsole(result) {
        console.log(result);
    }

    function displayPage(result) {
        document.getElementById("myH1").textContent = result;
    }
