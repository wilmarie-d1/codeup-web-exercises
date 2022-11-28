"use strict"

let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast";
let accessToken = MAPBOX_TOKEN;

mapboxgl.accessToken = MAPBOX_TOKEN;
console.log("token" + accessToken)



let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-96.802944, 32.777995]

});


map.addControl(new mapboxgl.NavigationControl());

$('#search-btn').click(() => {
    const search = $('#search-input').val()
    console.log(search)
    geocode(search, mapboxgl.accessToken).then((location) => {
        console.log(location)
        map.setCenter(location)
        map.setZoom(11)

        let marker = new mapboxgl.Marker()
            .setLngLat([location[0],location[1]])
            .addTo(map)

        ajaxCall(location)
        revGeo(location[0], location[1])
    })

})

let ajaxCall = (arr) => {
    $.get(weatherAPI, {
        APPID: OPEN_WEATHER_APPID,
        lat: arr[1],
        lon: arr[0],
        units: "imperial"
    }).done(function(data) {

        let forecasts = data.list
        let forecastHTML = append(forecasts)
        $('#weather').html(forecastHTML)
        console.log(forecasts)
    })
}
// const successCallback = (position) => {
//     console.log(position);
// };
//
// const errorCallback = (error) => {
//     console.log(error);
// };
//
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
