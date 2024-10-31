let firstName = "Javier";
let lastName = "Prieto";
let country = "México";
let city = "CDMX";
let age = 20;
let isMarried = false;
let year = 2024;

console.log("Tipos de Datos:");

console.log("TIPOS DE DATOS");
console.log("Nombre: ", typeof firstName);
console.log("Apellido: ", typeof lastName);
console.log("Country: ", typeof country);
console.log("ciudad: ", typeof city);
console.log("Edad: ", typeof age); 
console.log("Esta casado?: ", typeof isMarried); 
console.log("Año:", typeof year); 

console.log("Comparacioes:");
console.log("'10' == 10:", '10' == 10); // true
console.log("parseInt('9.8') == 10:", parseInt('9.8') == 10); // false


console.log("Valores Booleanos");
//True
console.log("Booleano1:", Boolean(1));
console.log("Booleano2:", Boolean('Hello')); 
let xd =  true
console.log("Booleano3:", xd);
//FALSE
console.log("Booleano1:", Boolean(0));
console.log("Booleano2:", Boolean('')); 
xd = false;
console.log("Booleano3:", xd); 


//Resultados
console.log("4 > 3:", 4 > 3); // true
console.log("4 >= 3:", 4 >= 3); // true
console.log("4 < 3:", 4 < 3); // false
console.log("4 <= 3:", 4 <= 3); // false
console.log("4 == 4:", 4 == 4); // true
console.log("4 === 4:", 4 === 4); // true
console.log("4 != 4:", 4 != 4); // false
console.log("4 !== 4:", 4 !== 4); // false
console.log("4 != '4':", 4 != '4'); // false
console.log("4 == '4':", 4 == '4'); // true
console.log("4 === '4':", 4 === '4'); // 

//FECHAS
const ahora = new Date();
console.log("Year:", ahora.getFullYear());
console.log("Month as a number:", ahora.getMonth() + 1);
console.log("Date:", ahora.getDate());
console.log("Day as a number:", ahora.getDay());
console.log("Hours:", ahora.getHours());
console.log("Minutes:", ahora.getMinutes());
let segundos = date.now()
console.log(segundos)

//Triangulo
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = (base * height) / 2;
console.log("The area of the triangle is ", area);


//Perimetro
let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side b of the triangle:");
let sideC = prompt("Enter side c of the triangle:");
let perimeter = sideA+sideB+sideC;
console.log("The perimeter of the triangle is " + perimeter);