
// Ejemplo como se seleccionan elementos con CSS
// h1 { color: red }
// .parrafito{ ... }
// #pid{ ... }

// querySelector tenemos que apuntar como si fuera css h1, .parrafito , #pid etc
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

// Si desde el nombre del metodo(funcion) selector ya le decimos que queremos
// seleccionar una clase ya no es necesario usar el punto (.) .parrafito
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

const suma = document.querySelector('#resultado')

console.log(input1.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,
});

//Propiedad para modificar la etiqueta H1
//.innerHTML incluso te deja agregar más código HTML para ser ejecutado

h1.innerHTML = "Patito";

//.innerText solo te deja modificar usando texto
h1.innerText = "Lekkerding calculo";

/* La forma normal de modificar un atributo es con
.getAttribute y .setAttribute */

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

/*Existe otra función que sirve especificamente con clases*/

h1.classList.add('rojo');
//h1.classList.remove('verde');

//asignamos y modificamos directamente el valor por defecto del input.
input1.value = "456";

// Crear un elemento nuevo con una imagen y la almacenamos en una variable
const img = document.createElement('img');
// Le asignamos atributos
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
// Insertamos la imagen dentro de un elemento (pid) que sirve como contenedor.
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    suma.innerText = "Resultado: " + sumaInput;
}