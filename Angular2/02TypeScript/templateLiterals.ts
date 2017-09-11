function getEmpresa() {
    return "Yuxi";
}

let nombre:string = "Daniel";
let apellido:string = "Florez"
let edad:number = 24;

let texto = `Hola, ${nombre} ${apellido} (${edad})`;
let texto2 = `${ 1 + 2 + 5 }`;
let texto3 = `Bienvenido a: ${ getEmpresa() }`;

console.log(texto);
console.log(texto2);
console.log(texto3);