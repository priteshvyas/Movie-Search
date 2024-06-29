let apiBase = "https://www.omdbapi.com/?apikey=61e576a4&t=";

function searchMovie() {
    let query = document.getElementById("inputt").value;
    console.log(query)

    // Construct the full URL
    let searchUrl = apiBase + query;

    // Print the constructed URL to the console
    console.log(searchUrl);

    fetch(searchUrl)
        .then((response) => {
            return response.json();

        })
        .then((response) => {
            console.log(response);
            document.getElementById("title").innerHTML = response.Title;
            document.getElementById("year").innerHTML = response.Year;

            document.getElementById("Released").innerHTML = response.Released;
            document.getElementById("Runtime").innerHTML = response.Runtime;
            document.getElementById("Genre").innerHTML=response.Genre;
            document.getElementById("Director").innerHTML=response.Director;
            document.getElementById("Actors").innerHTML=response.Actors;
           



        });
}
