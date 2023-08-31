// Utiliza o método 'at()' para obter o caractere na posição especificada da string.
// Este método aceita índices negativos, permitindo fácil acesso aos caracteres no final da string.
// No caso, -4 refere-se ao caractere 't' em 'Mateus'.
console.log('Mateus'.at(-4));

// Utiliza o método 'charAt()' para obter o caractere na posição 4 da string 'Mateus'.
// Como as strings são baseadas em índice 0, a posição 4 refere-se ao quinto caractere, que é 'u'.
console.log('Mateus'.charAt(4));

// Utiliza o método 'concat()' para combinar (concatenar) a string 'Mateus' com a string ' Chioca'.
// O resultado esperado é 'Mateus Chioca'.
console.log('Mateus'.concat(' Chioca'));

// Utiliza o método 'startsWith()' para verificar se a string 'Mateus' começa com o caractere 'M'.
// Retorna 'true' se for o caso, e 'false' caso contrário. O resultado esperado aqui é 'true'.
console.log('Mateus'.startsWith('M'));

// Utiliza o método 'endsWith()' para verificar se a string 'Mateus' termina com o caractere 's'.
// Retorna 'true' se for o caso, e 'false' caso contrário. O resultado esperado aqui é 'true'.
console.log('Mateus'.endsWith('s'));
