/*
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            if (!response.ok) {
                throw new Error ("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
*/

    async function fetchData()
    {
        try {
            const pokeApiName = document.getElementById("pokeApiName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeApiName}`);

             if (!response.ok) 
                {
                throw new Error ("Could not fetch resource");
                }

            const data = await response.json();
            const pokeApiSprite = data.sprites.front_default;
            const imgElements = document.getElementById("pokeApiSprite");

            imgElements.src = pokeApiSprite;
            imgElements.style.display = "block";

            }

            catch (error) 
            {
            console.error(error);
            }
    }

