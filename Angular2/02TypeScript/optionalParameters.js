"use strict";
function vehicleComponents(wheels, fuel, color) {
    if (color) {
        return "Wheels: " + wheels + ", fuel: " + fuel + ", color: " + color;
    }
    else {
        return "Wheels: " + wheels + ", fuel: " + fuel;
    }
}
var vehicleWhitColor = vehicleComponents(4, 'oil', 'red');
var vehicleWhitouthColor = vehicleComponents(4, 'oil');
console.log(vehicleWhitColor);
console.log(vehicleWhitouthColor);
