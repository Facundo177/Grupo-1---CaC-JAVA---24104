URL = "http://localhost:8080/webapp/fotos";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};


function cargarImagenes() {
    fetch(URL, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            
            response.forEach(element => {

                $("#filasGaleria")
                    .append($('<div>').addClass("col-lg-6 mb-4")
                        .append($('<div>').addClass("card")
                            .append($('<div>').addClass("foto-carta").css("max-height", "600px")
                                .append($('<img>').addClass("card-img-top").attr('loading', 'lazy').attr('src', element.urlImagen))
                            )
                            .append($('<div>').addClass("card-body d-flex justify-content-between")
                                .append($('<a>').addClass("text-decoration-none text-black").attr('target', '_blank').attr('href', element.urlFotografo)
                                    .append($('<h5>').addClass("card-title")
                                        .text(element.nombreFotografo)
                                    )
                                )
                                .append($('<a>').addClass("btn btn-outline-dark").attr('target', '_blank').attr('href', element.urlOrigen)
                                    .text('Original')
                                )
                            )
                        )
                    );
            });
        })
        .catch(err => console.error(err));
}


window.onload = cargarImagenes();
