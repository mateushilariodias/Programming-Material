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

// A variável carsOne é declarada como um array contendo marcas de carros. Em seguida, o método .sort() é chamado para ordenar os elementos do array em ordem alfabética.
const carsOne = ['Kia', 'Ford', 'BMW', 'Mitsubishi', 'Honda', 'Porsche', 'Tesla'].sort();

// O resultado da ordenação, agora armazenado em carsOne, é impresso no console.
console.log(carsOne);

// A variável carsTwo é declarada como a concatenação de dois arrays, usando o método .concat(). 
const carsTwo = ['Mercedes-Benz', 'Toyota'].concat(['Volkswagen', 'Hyundai']);

// O resultado da concatenação, agora armazenado em carsTwo, é impresso no console.
console.log(carsTwo);

// A variável carsThree é declarada como um array que é então revertido usando o método .reverse().
const carsThree = ['Chevrolet', 'Fiat', 'Jeep', 'Renault', 'Citroën'].reverse();

// O resultado da reversão, agora armazenado em carsThree, é impresso no console.
console.log(carsThree);

// A variável carsFour é declarada como um array contendo marcas de carros.
const carsFour = ['Nissan', 'Peugeot', 'Caoa Chery', 'Audi', 'Volvo'];

// O método .includes() é chamado para verificar se o array carsFour inclui 'Land Rover'. O resultado (um valor booleano) é impresso no console.
console.log(carsFour.includes('Land Rover'));

// O método .includes() é chamado novamente para verificar se o array carsFour inclui 'Audi'. O resultado (um valor booleano) é impresso no console.
console.log(carsFour.includes('Audi'));
