



//MI VERSION

//CTRL + SHIFT + 12 = F12 = inspeccionar


//variables

//1
//alert('Hola mundo');
//let numroUsuario = prompt('me indicas un numero');
//console.log(`el numero del usuario es:\n${numroUsuario}`);



//2
//agrupar variables

//let numeroSecreto = 4;

function juego() {

    let numeroUsuario; //= let numeroUsuario = 0;
    let intentosHechos = 1;
    //let rango = 10;
    let rango = parseInt(prompt('Adivina un numero entre el rango del 1 a ?\nPuede ser 1 y 10, 1 y 5, etc.'));
    //let maximosIntentos = 3;
    let maximosIntentos = parseInt(prompt('En cuantos intentos crees poder adivinar'));

    //math.floor() devuelve el numero decimal de math.random() que arroja un numero entre 0 y 0.999, sin decimales, pero primero hay que multiplicarlo por 10, para q devuelva un # entre 0 y 9, y le sumamos 1
    let numeroSecreto = Math.floor(Math.random()*rango+1);
    console.log(`el numero secreto es:\n${typeof(numeroSecreto)} ${numeroSecreto}`);


    //ciclo while, mintras sean diferentes, numero secreto y numero de usuario, no sale del bucle, hasta q acierta, sean iguales
    while (numeroSecreto != numeroUsuario) {    

        numeroUsuario = parseInt(prompt('me indicas un numero entre 1 y ' + rango + `\nSolo tienes\n${maximosIntentos - intentosHechos + 1} ${(maximosIntentos == intentosHechos) ? 'intento' : 'intentos'}`));

        console.log(`intento numero:\n${intentosHechos}\nSolo tienes\n${maximosIntentos} ${maximosIntentos == 1 ? 'intento' : 'intentos'}`);

        console.log(`el numero del usuario es:\n${typeof(numeroUsuario)} ${numeroUsuario}`);

        console.log(`el numero del usuario es igual al numero secreto?\n${numeroSecreto == numeroUsuario}`);

        //este codigo realiza la comparacion
        if (numeroSecreto == numeroUsuario) {

            //si acertamos
            console.log(`Acertaste, el numero secreto es:\n${numeroSecreto}, lo hiciste en ${intentosHechos} ${intentosHechos == 1 ? 'intento' : 'intentos'}`);
            alert(`Acertaste, el numero secreto es:\n${numeroSecreto}, lo hiciste en ${intentosHechos} ${intentosHechos == 1 ? 'intento' : 'intentos'}`);

            juego();

        //si no acertamos
        } else {

            //si lo q colocamos es un numero menor
            if (numeroSecreto > numeroUsuario) {
                console.log(`el numero secreto es mayor`);
                alert(`NO acertaste, el numero secreto es mayor`);
            
            //si lo q colocamos es un numero mayor    
            } else {
                console.log(`el numero secreto es menor`);
                alert(`NO acertaste, el numero secreto es menor`);
            }
            //se incrementa cuando no se acierta
            intentosHechos = intentosHechos + 1;// = intentosHechos++; = intentos+=1;

            //condicion de numero maximo de intentos
            if (intentosHechos > maximosIntentos) {
                console.log(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                //hasta que se cumpla la condicion, o acierte o haga 3 intentos, salimos del ciclo
                
                juego();
            } 
            
            //alert(`NO acertaste, el numero secreto es:\n${numeroSecreto}`);
        }

    }
    
}
juego();





/*





// //3 
// // otra forma de poner la let intentosHechos y la palabra intentos


// //agrupar variables
// let numeroSecreto = 4;
// let numeroUsuario; //= let numeroUsuario = 0;
// let intentosHechos = 0;
// let palabraIntentos = 'intento';
// let rango = 10;

// //ciclo while, mintras sean diferentes, numero secreto y numero de usuario, no sale del bucle, hasta q acierta, sean iguales
// while (numeroSecreto != numeroUsuario) {    

//     numeroUsuario = prompt('me indicas un numero entre 1 y ' + rango );

//     console.log(`el numero del usuario es:\n${numeroUsuario}`);

//     console.log(`el numero del usuario es igual al numero secreto?\n${numeroSecreto == numeroUsuario}`);

//     //intentosHechos eran 0, ahora es 1
//     intentosHechos = intentosHechos + 1;//=intentosHechos ++; o intentosHechos += 1;
    

//     //este codigo realiza la comparacion
//     if (numeroSecreto == numeroUsuario) {
//         //si acertamos
//         console.log(`el numero del usuario es igual al numero secreto?\n${numeroSecreto == numeroUsuario}`);
//         alert(`Acertaste, el numero es:\n${numeroSecreto}, lo hiciste en ${intentosHechos} ${palabraIntentos}`);

//     //si no acertamos
//     } else {

//         //si lo q colocamos es un numero menor
//         if (numeroSecreto > numeroUsuario) {
//             console.log(`el numero secreto es mayor`);
//             alert(`NO acertaste, el numero secreto es mayor`);
        
//         //si lo q colocamos es un numero mayor    
//         } else {
//             console.log(`el numero secreto es menor`);
//             alert(`NO acertaste, el numero secreto es menor`);
//         }
        
//         //sino acertamos, aumenta la palabraIntentos = 'veces';
//         palabraIntentos = 'veces';
        
//         //alert(`NO acertaste, el numero secreto es:\n${numeroSecreto}`);
//     }

// }


*/
