let p1 = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("Promesa terminada");
        resolve();
    }, 1500 )

})

p1.then(function(){
    console.log("Ejecutarme cuando se termine bien");
},  function(){
    console.log("Ejecutarme si algo sale mal");
})