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


