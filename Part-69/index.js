
    fetch("people.json")
        .then(response => response.json())
        .then(values => values.foreach(value => console.log(value.isEmployed)));