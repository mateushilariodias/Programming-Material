const myNumber = 0;

// Uso do operador "||" (OU lógico)
console.log(myNumber || 5);
// O operador "||" retornará o valor à sua esquerda se ele for "truthy" (ou seja, avaliado como verdadeiro). 
// Se o valor à esquerda for "falsy" (avaliado como falso), ele retornará o valor à sua direita.
// Neste caso, "myNumber" é 0, que é um valor "falsy" em JavaScript, então o resultado será 5.

// Uso do operador "??" (nullish coalescing)
console.log(myNumber ?? 5);
// O operador de coalescência nula (??) retorna o valor à direita de seus operandos 
// somente quando o valor à esquerda é null ou undefined. Em qualquer outra situação, ele retorna o valor à esquerda.
// Neste caso, como "myNumber" é 0 (e não é nem null nem undefined), o resultado será 0.
