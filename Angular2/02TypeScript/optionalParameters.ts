function vehicleComponents(wheels: number, fuel: string, color?: string): string
{
    if(color){
        return "Wheels: " + wheels + ", fuel: " + fuel + ", color: " + color;
    }
    else{
        return "Wheels: " + wheels + ", fuel: " + fuel;
    }
}
let vehicleWhitColor = vehicleComponents(4, 'oil', 'red');
let vehicleWhitouthColor = vehicleComponents(4, 'oil');
console.log(vehicleWhitColor);
console.log(vehicleWhitouthColor);