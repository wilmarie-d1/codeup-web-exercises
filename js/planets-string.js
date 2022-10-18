(function() {
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
//    let planetV = planetsArray.join("<br>");
    // console.log(planetV);

    let str;
    let newPlanetArray = [];
    planetsArray.forEach(function (element){
        console.log(`<li>${element}</li>`);
    })
console.log(planetsArray);
    newPlanetArray.unshift('<ul>');
    newPlanetArray.push("</ul>");


    // function bonus() {
    //     let newArray =  planetsArray;
    //     newArray.unshift('<ul>');
    //     newArray.push("</ul>");
    //     return newArray.join('<li>');
    // }
    //
    // console.log(bonus());
})();
