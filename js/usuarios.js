URL = "http://localhost:8080/webapp/usuarios";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};


function getUsusarios(){
    fetch(URL, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            
            response.forEach(element => {

                $("#tabla-usuarios").find('tbody')
                    .append($('<tr>')
                        .append($('<td>').text(element.id))
                        .append($('<td>').text(element.nombre))
                        .append($('<td>').text(element.apellido))
                        .append($('<td>').text(element.email))

                        .append($('<td>').addClass("actions")
                            .append($('<button>').addClass("btn btn-outline-dark m-1").attr('data-id', element.id).text('Eliminar'))
                            .append($('<button>').addClass("btn btn-outline-dark m-1").attr('data-id', element.id).text('Modificar'))
                        )
                    );
            });
        })
        .catch(err => console.error(err));
}


window.onload = getUsusarios();



/* 
document.getElementById("botonQueryApi").addEventListener("click", () => {buscarImagen()});
document.getElementById("queryApi").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        buscarImagen();
    }
}); */
