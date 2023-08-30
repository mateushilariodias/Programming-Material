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
