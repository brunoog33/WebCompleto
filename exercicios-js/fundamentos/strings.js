const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//COde da tabela ask
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//Pega da posição até o final da palavra
console.log(escola.substring(0, 3))//Pega apartir da posição 0 mais 3 posições. (A 0 conta também)

console.log('Escola '.concat(escola).concat("!"))//pode utilizar +
console.log(escola.replace(3, 'e'))//pode colocar regex

console.log('Ana,Pedro,Maria'.split(','))//pode colocar regex
