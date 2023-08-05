// Cria um array chamado 'cellphones' com três elementos.
const cellphones = ["Iphone", "Samsung", "Zenfone"];
console.log(cellphones); // Output: ["Iphone", "Samsung", "Zenfone"]

// Remove o último elemento do array 'cellphones'.
cellphones.pop();
console.log(cellphones); // Output: ["Iphone", "Samsung"]

// Adiciona "Xiaomi" ao final do array 'cellphones'.
cellphones.push('Xiaomi');
console.log(cellphones); // Output: ["Iphone", "Samsung", "Xiaomi"]

// Remove o primeiro elemento do array 'cellphones'.
cellphones.shift();
console.log(cellphones); // Output: ["Samsung", "Xiaomi"]

// Adiciona "Nokia" ao início do array 'cellphones'.
cellphones.unshift("Nokia");
console.log(cellphones); // Output: ["Nokia", "Samsung", "Xiaomi"]

// Procura por "Motorola" no array 'cellphones'.
const resultOne = cellphones.find(cellphone => cellphone === "Motorola");
console.log(resultOne); // Output: undefined (pois "Motorola" não existe no array)

// Procura por "Samsung" no array 'cellphones'.
const result = cellphones.find(cellphone => cellphone === "Samsung");
console.log(result); // Output: "Samsung" (pois "Samsung" existe no array)

// .map() cria um novo array transformando cada elemento do array original.
// Neste caso, estamos criando um novo array com o valor 'White' para cada elemento das cores primárias.
const primaryColors = ['Red', 'Yellow', 'Blue'].map(element => 'White');
console.log(primaryColors);

// .filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
// Neste caso, estamos filtrando apenas a cor 'Purple' das cores secundárias.
const secondaryColors = ['Green', 'Purple', 'Orange', 'Purple'].filter(element => element === 'Purple');
console.log(secondaryColors);

// .some() testa se pelo menos um elemento no array passa no teste implementado pela função fornecida.
// Aqui, estamos verificando se a cor 'Yellow' existe nas cores terciárias.
const tertiaryColors = ['Yellow', 'Red', 'Black'].some(element => element === 'Yellow');
console.log(tertiaryColors);

// .every() testa se todos os elementos no array passam no teste implementado pela função fornecida.
// Neste caso, estamos verificando se todas as cores neutras são iguais a 'Brown'.
const neutralColors = ['White', 'Grey', 'Brown'].every(element => element === 'Brown');
console.log(neutralColors);
