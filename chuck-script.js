document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url) 
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log(json)
            let result = "";
            result += "<div><p>";
            result += json.value;
            result += "</p></div>";
            document.getElementById("chuck-results").innerHTML = result;
        });
});