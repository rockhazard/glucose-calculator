// utility for calculating hemoglobin A1c using average glucose

var Glucose = {};

Glucose.Calc = ( function () {
    // GLOBALS
    var avgGlucose = 0,
    input = document.getElementById("input"),
    output = document.getElementById("output"),
    button = document.getElementById("calculate");

    // FUNCTIONS

    // calculate hemoglobin A1c to tenth precision.
    function calculateA1c(avg) {
        var preciseA1c = (46.7 + avg) / 28.7;
        var A1c = Math.round(preciseA1c * 100) / 100;
        return A1c;
    }

    // EVENTS
    // send glucose average to calculateA1c on click
    button.onclick = function () {
        avgGlucose = Number(input.value);
        if (Number.isInteger(avgGlucose)) {
            conversion = calculateA1c(avgGlucose);
            output.innerHTML = "Your A1c is>> " + conversion;
        } else {
            output.innerHTML = "Only enter numbers!";
        }
    };

    // // send glucose average to calculateA1c on enter
    // input.onkeypress = function (event) {
    //     if (event.key == "Enter") {
    //         avgGlucose = Number(input.value);
    //         if (Number.isInteger(avgGlucose)) {
    //             conversion = calculateA1c(avgGlucose);
    //             output.innerHTML = "Your A1c is>> " + conversion;
    //         } else {
    //             output.innerHTML = "Please enter a number!";
    //         }
    //     }
    // };

    // EXPORT
    return {
        calculateA1c: calculateA1c
    };

}());