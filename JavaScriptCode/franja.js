var franja1 = [50, 100];
var franja2 = [101, 200];

console.log(franja1);
console.log(franja2);

if((franja1[0] <= franja2[1]) && (franja1[1] <= franja2[0])) {
    console.log('Se cruzan');
} else {
    console.log('No se cruzan');
}