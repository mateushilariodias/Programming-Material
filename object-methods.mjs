// Criação de um objeto chamado 'person' com três propriedades: name, yearsOld e artist
const person = {
    name: 'Mateus Hilário Dias',  // Propriedade 'name' com valor 'Mateus Hilário Dias'
    yearsOld: 18,                 // Propriedade 'yearsOld' com valor 18
    artist: true,                 // Propriedade 'artist' com valor true (booleano)
}

// Utiliza a função Object.values() para obter um array com todos os valores das propriedades do objeto 'person'
// O resultado esperado é: ['Mateus Hilário Dias', 18, true]
console.log(Object.values(person));

// Utiliza a função Object.keys() para obter um array com todas as chaves (nomes das propriedades) do objeto 'person'
// O resultado esperado é: ['name', 'yearsOld', 'artist']
console.log(Object.keys(person));

// Utiliza a função Object.entries() para obter um array com pares [chave, valor] das propriedades do objeto 'person'
// O resultado esperado é: [['name', 'Mateus Hilário Dias'], ['yearsOld', 18], ['artist', true]]
console.log(Object.entries(person));

// Define um objeto chamado person2 com duas propriedades: name e age
const person2 = {name: 'Mateus', age: 19};

// Utiliza a função Object.assign() para adicionar (ou sobrescrever) propriedades ao objeto person2
// Neste caso, estamos adicionando as propriedades 'dev' e 'address' ao objeto
console.log(Object.assign(person2, {
    dev: true,
    address:'Franca - SP'
}));

// Define um Map chamado entries com duas entradas: 'name' e 'age'
const entries = new Map([
    ['name', 'Mateus'],
    ['age', 19]
])

// Utiliza a função Object.fromEntries() para converter o Map em um objeto
// O resultado é um objeto com as propriedades 'name' e 'age'
console.log(Object.fromEntries(entries));
