// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    let nombreDelCliente = pedido.shift(); 
    pedido.unshift("bebida");
    pedido.push(nombreDelCliente);
    return pedido;
}
let pedido = ["Ariel Almada", "comida", "monto total"];
console.log(procesarPedido(pedido));

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    const pares = numeros.filter(function (numeros) {
        return numeros % 2 === 0;
      });
      suma = pares.reduce((acumulador, numeroactual) => {
        return acumulador + numeroactual;
      }, 0);
    return suma;
}
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(sumarPares(numeros));

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith('a'));
}

const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const posicion = words.indexOf(word);
    const FindWord = words.some(palabra => palabra === 'mundo');
    if (FindWord)
    {
        return words.slice(posicion + 1);
    }
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === "JavaScript") {
            return [i, j]; // Devuelve la posición [fila, columna]
          }
        }
      }
      return [-1, -1]; // Si no encuentra "JavaScript"
    }

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    const mayor = Math.max(...books);
    const menor = Math.min(...books);
    const indiceMayor = books.indexOf(mayor);
    const indiceMenor = books.indexOf(menor);
    return [indiceMenor, indiceMayor];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
