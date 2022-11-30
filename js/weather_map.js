"use strict"

let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast";
let accessToken = MAPBOX_TOKEN;

mapboxgl.accessToken = MAPBOX_TOKEN;
console.log("token" + accessToken)



let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
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

        let city = data.city.name
        let country = data.city.country
        $('#city-name').html(`${city}, ${country}`);
    })

}

//
// let append = (data) => {
//     let html = ``
//     for  (let i = 0; i < data.length; i += 8){
//         console.log(data[i]);
//         const {dt_txt,
//             main: {humidity, temp, temp_max, temp_min},
//             weather: [{description, icon}], wind: {speed}} = data[i]
//
//         html += `
//        <div class="container text-center">
//   <div class="row">
//                     <div class="card col">
//                <h6 class="card-header text-center" style="font-size: small">
//                 ${dt_txt.substring(5,7)}.${dt_txt.substring(8,10)}.${dt_txt.substring(0,4)}
//                </h6>
//   <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail d-block border-0" style='width: 100px; height: 100px;' alt="...">
//     <div class="card-body pt-0">
//                            <div class="card-body pt-0">
//               <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
//                 <div class="d-flex justify-content-around" >
//                 <p class="card-text  text-warning pe-1" style="font-size: small;">
//                 H:${temp_max.toFixed(1)}ºF
//                 </p>
//                 <p class="card-text " style="font-size: small">
//                 L:${temp_min.toFixed(1)}ºF
//                 </p>
//                 </div>
//               </div>
//               <ul class="list-group text-center">
//                 <li class="humidity list-group-item" style="font-size: small">Humidity: ${humidity}%</li>
//                 <li class="speed list-group-item" style="font-size: small">Wind: ${speed} mph</li>
//               </ul>
//               <div class="card-body p-0 ">
//               <p class="list-group-item  ">${description.toUpperCase()}</p>
//               </div>
//             </div>
//             </div>
//             </div>
//
// `}
//     return html
// }
//REV-GEO LOCATION DISPLAY FUNCTION
let revGeo = (lng, lat) => {
    reverseGeocode({lng, lat}, MAPBOX_TOKEN).then(function(results){
        console.log(results)
        $('#city').text(`${results}`)

    })
}

(function () {
    const successCallback = (position) => {
        console.log(position);
        let lat = (position.coords.latitude)
        let lng = (position.coords.longitude)
        revGeo(lng, lat)
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.watchPosition(successCallback, errorCallback);



})();

