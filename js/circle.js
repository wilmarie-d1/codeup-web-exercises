(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            let area = Math.PI * Math.pow(circle.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(circle.getArea()));
            } else {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.abs(circle.getArea()));

                return Math.abs(doRounding);
            }

        },

    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

  circle.radius  = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
