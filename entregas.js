// clase 1


// const edad=parseInt(prompt("¿Eres mayor de edad? Ingrese su edad"));
// alert("Mi edad es " + edad);

// clase 2


// const numero = parseInt(prompt("Ingrese su edad"));

// if (numero >= 18) {
//    alert("Bienvenido");

// }

// else if (numero < 18) {
// alert ("No puedes ingresar");
// }

// else {
// alert ("Ingresa tu edad con teclado numerico");  
// } 


// clase 3

// let adivinar = prompt("Dentro de la casa enta Ana, juan y marcos. Adivina quien es la persona que falta sabiendo que el nombre arranca con la letra G");

// while (adivinar != "ESC" ) {
//    switch (adivinar) {

//       case "german":
//          alert ("Casi! Pero no es!");

//          break;

//       case "gabriel":
//       alert ("Ese no! Otra vez");
      
//       break;

//       case "gonzalo":
//          alert("Correcto! Acertaste!");

//          break;

//          default:
//             alert ("No lo lograste");

//             break;

//    }

//    adivinar = prompt ("Dentro de la casa enta Ana, juan y marcos. Adivina quien es la persona que falta sabiendo que el nombre arranca con la letra G");
// }


// clase 4


// function calculadora(a, b, operacion){

//    switch (operacion) {

//       case "+":
//          return a + b;
//          break;

//       case "-":
//          return a - b;
//           break;
          
//       case "*":
//       return a * b;
//       break;
      
//       case "/": 
//       return a / b;
//       break;

//       default:
//       return 0;
//       break;
//    }
// }

// let calcular = calculadora (5, 10, "+");
// console.log(calcular);


// clase 5 objetos


// function Persona (n, e, c) {

//    this.nombre = n;
//    this.edad = e;
//    this.calle = c;
//    this.presentarse = function () {

//       console.log("Hola soy " + this.nombre);
//    };
// }
//    const persona1 = new Persona ("Homero", 39, "tucuman 2366");

//    persona1.presentarse();

   // class libro {
   //    constructor (n, p,) {
   //       this.nombre = n;
   //       this.precio = p;
         
   //    }
   // }

   // const estante = parseInt(prompt("ingresar estante del libro"));

   //   const libro1 = new libro ( "Harry Potter", 2500, estante );

   //  console.log(libro1);

   // clase 4 nuevamente


//    let canapino = 250;
//    let werner = 230;
//    let acelera = 50;

//    function Carrera(werner, canapino, acelera) {

// if (canapino < werner) {
//     console.log("Va mas rapido werner");
// }
// else {
//     console.log("Canapino va mas rapido");
// }


// if (werner < canapino )  {
//     console.log("werner va a " + (werner + acelera));
// }
// else if (werner < canapino){
//     console.log(canapino + acelera);
// }
// else {
//     console.log("error");

// }
// }

// console.log(Carrera);


//    clase 6 arrays 



// const caca = [];
// console.log(typeof caca);

// const mama = ["ferman ", "gonzalo", "Matias", "franco", caca];

// console.log (mama);
// console.log(typeof mama);


   // EJemplo piola 

// const listaNombres  = [];

// let cantidad = 5;

// do {

//    let entrada = prompt ("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// } while(listaNombres.length != cantidad);


// const nuevaLista = listaNombres.concat (["ANA", "EMA"]);

// alert (nuevaLista.join("\n"));



// array ojetos 


const objeto1 = { id: 1, producto: "arroz", precio:250};
const array = [objeto1, {id: 2, producto: "zanahorias", precio: 100}];
array.push({id: 3, producto: "manzana", precio:250});

console.table(objeto1);
console.table(array);