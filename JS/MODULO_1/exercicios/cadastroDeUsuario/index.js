let primeiroNome = prompt('Insira o seu Primeiro Nome: ')
let sobrenome = prompt('Insira o seu Sobrenome: ')
let campoDeEstudo = prompt('Insira o Campo de Estudo: ')
let anoDeNascimento = parseFloat(prompt('Insira o Ano de Nascimento: '))

alert(
  'Recruta cadastrado com sucesso!\n' +
    '\nNome completo: ' +
    primeiroNome +
    ' ' +
    sobrenome +
    '\nCampo de Estudo: ' +
    campoDeEstudo +
    '\nIdade: ' +
    (2023 - anoDeNascimento)
)
