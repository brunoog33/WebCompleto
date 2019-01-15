const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Quando number pode utilizar uma dessas funções
console.log(media.toFixed(2))// Arredonda para duas casas
console.log(media.toString())// Converte para String
console.log(media.toString(2))// Converte para binário