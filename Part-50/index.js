
    let timeOutId;

    function startTimer() {
       timeOutId = setTimeout(() => window.alert("Hello"),3000);
       console.log("Started timer");
    }

    function clearTimer() {
        clearTimeout(timeOutId);
        console.log("Cleared timer");
    }