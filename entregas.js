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

let adivinar = prompt("Dentro de la casa enta Ana, juan y marcos. Adivina quien es la persona que falta sabiendo que el nombre arranca con la letra G");

while (adivinar != "ESC" ) {
   switch (adivinar) {

      case "german":
         alert ("Casi! Pero no es!");

         break;

      case "gabriel":
      alert ("Ese no! Otra vez");
      
      break;

      case "gonzalo":
         alert("Correcto! Acertaste!");

         break;

         default:
            alert ("No lo lograste");

            break;

   }

   adivinar = prompt ("Dentro de la casa enta Ana, juan y marcos. Adivina quien es la persona que falta sabiendo que el nombre arranca con la letra G");
}