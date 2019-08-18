// rest juntar / spread espalhar

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1200.50 }
const cloneFuncionario = { ativo: true, ...funcionario }
console.log(cloneFuncionario)

// usar spread com Array
const grupoA = ['João', 'Maria', 'Mauro']
const grupoFinal = ['Pedro', ...grupoA, 'José']
console.log(grupoFinal)