const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
    ingredientes: ["mozzarella", "tomate", "harina"],
    precio: 500,
	},
];

const idInpar = pizzas.filter((pizza) => pizza.id % 2 !== 0).map((pizza) => pizza.nombre);
console.log(`Las Pizzas con id impar son: ${idInpar}`);

const [precioMenor]= pizzas.filter((pizza) => pizza.precio < 600);
console.log(`Las pizzas con precio menor a 600 son: ${precioMenor.nombre}`);

const nombrePizzas = pizzas.map((pizza) => pizza.nombre);
console.log(`Los nombres de las pizzas son: ${nombrePizzas}`);

const preciosPizzas = pizzas.map((pizza) => pizza.precio);
console.log(`Los precios de las pizzas son: ${preciosPizzas}`);

const nombrePizzaPrecio = pizzas.map((pizza) => `${pizza.nombre} - ${pizza.precio}`);
console.log(`Los nombres y precios de las pizzas son: ${nombrePizzaPrecio}`);	