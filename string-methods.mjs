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

// Utiliza o método 'includes()' para verificar se a string 'Rafael' contém o caractere 'e'.
// Retorna 'true' se for o caso, e 'false' caso contrário.
// O resultado esperado aqui é 'true'.
console.log('Rafael'.includes('e'));

// Utiliza o método 'indexOf()' para obter o índice da primeira ocorrência do caractere 'a' na string 'Rafael'.
// Retorna o índice da primeira ocorrência, ou -1 se o caractere não for encontrado.
// O resultado esperado aqui é '1', já que a primeira ocorrência do 'a' está na segunda posição (índice 1).
console.log('Rafael'.indexOf('a'));

// Utiliza o método 'lastIndexOf()' para obter o índice da última ocorrência do caractere 'a' na string 'Rafael'.
// Retorna o índice da última ocorrência, ou -1 se o caractere não for encontrado.
// O resultado esperado aqui é '3', já que a última ocorrência do 'a' está na quarta posição (índice 3).
console.log('Rafael'.lastIndexOf('a'));

// Utiliza o método 'match()' para encontrar todas as ocorrências de caracteres maiúsculos (expressão regular /[A-Z]/g) na string 'Rafael'.
// Retorna um array com todos os caracteres que atendem à expressão regular.
// O resultado esperado aqui é ['R'], já que 'R' é o único caractere maiúsculo na string 'Rafael'.
console.log('Rafael'.match(/[A-Z]/g));

// Preenche a string "Amor" com "?" à esquerda até que ela tenha um comprimento total de 6 caracteres.
console.log("Amor".padStart(6, "?"));

// Preenche a string "Anor" com "?" à direita até que ela tenha um comprimento total de 6 caracteres.
console.log("Anor".padEnd(6, "?"));

// Este comando faz a string "Amor" ser repetida 3 vezes.
// Portanto, ele imprimirá "AmorAmorAmor" no console.
console.log("Amor".repeat(3));

// Este comando substitui a substring "mo" na string "Amor" por "a".
// Portanto, ele imprimirá "Aar" no console.
console.log("Amor".replace("mo", "a"));

// O método `search()` procura por uma correspondência entre uma expressão regular ou uma substring e uma string.
// Ele retorna a posição da primeira correspondência encontrada.
// No exemplo abaixo, estamos procurando a letra "o" na palavra "Confuso".
console.log("Confuso".search("o"));

// O método `slice()` extrai uma seção de uma string e retorna uma nova string.
// Os parâmetros indicam o índice inicial e final (não incluído) da substring que você deseja extrair.
// No exemplo abaixo, estamos extraindo os caracteres da posição 1 até (mas não incluindo) a posição 3 da palavra "Confuso", que resultará na substring "on".
console.log("Confuso".slice(1, 3));

// O método `split()` divide uma string em um array de substrings com base no delimitador fornecido.
// Se você não fornecer um delimitador, o padrão é dividir em cada caractere.
// No exemplo abaixo, estamos dividindo a palavra "Confuso" em um array de caracteres.
console.log("Confuso".split(""));
