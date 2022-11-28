"use strict"

let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast";

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_APPID,
        q:     "Dallas, US"
    }
});

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "Dallas, US"
}).done(function(data) {
    console.log(data);
});

