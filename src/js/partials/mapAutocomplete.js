let autocomplete = {};

autocomplete.createDOM = function () {
    let element = new CreateElement;
    element.create('header', 'div').id('autocomplete-weather').class('autocomplete-weather').position(0);
        element.create('autocomplete-weather', 'div').id('pac-container').class('pac-container').position(0);
            element.create('pac-container', 'input').id('pac-input').class('pac-input').type('text').placeholder('Enter your location').position();
    element.create('article', 'div').id('map').class('map').position();
};

autocomplete.initMap = function () {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: +window.localStorage.getItem('lat') || 6.047978, lng: +window.localStorage.getItem('lng') || 80.212836},
        zoom: 10,
        mapTypeId: 'hybrid'
        });
    document.getElementById('pac-input').value = window.localStorage.getItem('city') || `Galle, Sri-Lanka`;

    let input = document.getElementById('pac-input');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    let infowindow = new google.maps.InfoWindow();
    let infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    let marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        let place = autocomplete.getPlace();

        map.fitBounds(place.geometry.viewport);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        window.localStorage.setItem('lat', map.center.lat());
        window.localStorage.setItem('lng', map.center.lng());
        window.localStorage.setItem('city', document.getElementById('pac-input').value);
        weather.getWeather();
    });
};

autocomplete.turnOn = function () {
    this.createDOM();
    this.initMap();
};

autocomplete.turnOn();