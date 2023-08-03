// Declaração da função isCityValid
// A função aceita um parâmetro 'city' e verifica se 'city' é igual a 'Pedregulho', 'Franca' ou 'São Paulo'.
// Se 'city' for igual a algum desses, a função retorna true. Caso contrário, retorna false.

// const isCityValid  = (city) => {
//     if ( city === 'Pedregulho' || city === 'Franca' || city === 'São Paulo' ) {
//         return true;
//     }
//     return false;
// }

// Chama a função isCityValid com 'Franca' como argumento e imprime o resultado no console.

// console.log(isCityValid('Franca')); 

// Chama a função isCityValid com 'Cristais Paulista' como argumento e imprime o resultado no console.

// console.log(isCityValid('Cristais Paulista')); 

// Declara uma constante 'cities' que é um array contendo três strings: 'Pedregulho', 'Franca' e 'São Paulo'.
const cities = ['Pedregulho', 'Franca', 'São Paulo'];

// Redefine a função isCityValid. 
// A nova definição da função verifica se o argumento 'city' está incluído no array 'cities'.
const isCityValid = (city) => cities.includes(city);

// Chama a nova definição da função isCityValid com 'Rifaina' como argumento e imprime o resultado no console.
console.log(isCityValid('Rifaina')); 

// Chama a nova definição da função isCityValid com 'Pedregulho' como argumento e imprime o resultado no console.
console.log(isCityValid('Pedregulho')); 
