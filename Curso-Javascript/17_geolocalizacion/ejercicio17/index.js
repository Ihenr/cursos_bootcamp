let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    
    markers = new google.maps.Marker({
    position: {
        lat: -1.831239,
        lng:  -78.183406,
    },
    map,
    title: "Ecuador - Quito",
    })
    
    
    markers = new google.maps.Marker({
    position: {
        lat: 30.00944,
        lng: 31.20861,
    },
    map,
    title: "Piramides de Egipto",
    })
    
    
    markers = new google.maps.Marker({
    position: {
        lat: 48.8583701,
        lng: 2.2944813,
    },
    map,
    title: "Torre Eiffel",
    })
    
}