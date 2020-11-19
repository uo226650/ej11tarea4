// Tarea 4: Crear un mapa dinámico con un determinado centro. El centro debe señalarse con un marcador
// AIzaSyC8aUp4J8B-MOmk6mg4A8cSsbE3qzEpB1g (miKey)

/**
 * Encapsulamiento de la función initMap como método de la case MapaDinamico
 * */
class MapaDinamico{

    initMap(){
        var favorito = {lat: 58.416658, lng:  -134.546880};
        var mapaFavorito = new google.maps.Map(document.getElementById('mapa'),{zoom: 6,center:favorito});
        var marcador = new google.maps.Marker({position:favorito,map:mapaFavorito});
    }
}

var mapaDinamicoGoogle = new MapaDinamico();

