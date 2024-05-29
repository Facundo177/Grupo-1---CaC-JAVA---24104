KEY = "gnmynb6IbfOj5BvXu6k833BnwNTGYAgmdWuxNzHJ3lWXelGMxVX75jW1";
URL = "https://api.pexels.com/v1/search?query=";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${KEY}`
    }
};



function getQuery() {
    return document.getElementById("queryApi").value;
}

function buscarImagen(query = getQuery()) {
    console.log(query);
    fetch(URL + query + '&orientation=portrait', options)
        .then(response => response.json())
        .then(response => {
            console.log(response.photos[0], response.photos[0].url, response.photos[0].photographer, response.photos[0].photographer_url, response.photos[0].src.original);

            document.getElementById("imagenApi1").src = response.photos[0].src.original;
            document.getElementById("fotografo1").href = response.photos[0].photographer_url;
            document.getElementById("nombreFotografo1").innerText = response.photos[0].photographer;
            document.getElementById("original1").href = response.photos[0].url;

            document.getElementById("imagenApi2").src = response.photos[1].src.original;
            document.getElementById("fotografo2").href = response.photos[1].photographer_url;
            document.getElementById("nombreFotografo2").innerText = response.photos[1].photographer;
            document.getElementById("original2").href = response.photos[1].url;

            document.getElementById("imagenApi3").src = response.photos[2].src.original;
            document.getElementById("fotografo3").href = response.photos[2].photographer_url;
            document.getElementById("nombreFotografo3").innerText = response.photos[2].photographer;
            document.getElementById("original3").href = response.photos[2].url;

            document.getElementById("imagenApi4").src = response.photos[3].src.original;
            document.getElementById("fotografo4").href = response.photos[3].photographer_url;
            document.getElementById("nombreFotografo4").innerText = response.photos[3].photographer;
            document.getElementById("original4").href = response.photos[3].url;
        })
        .catch(err => console.error(err));
}



window.onload = buscarImagen('nature');

document.getElementById("botonQueryApi").addEventListener("click", () => {buscarImagen()});
document.getElementById("queryApi").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        buscarImagen();
    }
});


