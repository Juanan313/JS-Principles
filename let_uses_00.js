
/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             
        console.log(x);         // 71
    }

    console.log(x);             // 71
}

/**
 * Aquí la variable x se sobreescribe por que se vuelve a declarar pero esta vive
 * en el mismo ambito que la anterior.
 */


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}

/**
 * Igual que el ejercicio anterior pero evitamos que la variable x 'global' a la función
 * sea modificada cerrando el ambito de la variable let x al bloque donde vive, por haberse
 * declarado como let.
 */

function hoistingTest() {

    console.log(w);               
    // console.log(z);               // ReferenceError

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;             
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError
    console.log(w);               // 1001
  }

  /**
   *    El primer log devuelve indefinido puesto que aunque lo encuentra dentro de la
   * función esta no ha sido declarada todavía, el siguiente log (x) recibe el valor declarado en el let
   * que cómo no afecta a la 'global' de la función esta no es modificada, y el log de y recibe el valor
   * de la global. luego se asignan los valores a z y w, w se utilizará más adelante en el último log.
   */


varTest();

letTest();

hoistingTest();

console.log(u);                    
/**
 * u ha sido declarada en la función hoistingTest y cómo no  se le ha declarado
 * un alcance estaa se inicializa como global y al haberse ejecutado anteriormente
 * dicha función se puede acceder a esta.
 */