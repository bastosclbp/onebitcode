// const money = parseInt(prompt("Qual a quantidade de dinheiro disponível? "))
// let adicionar = 0
// let remover = 0

// let revelar = prompt("A quantidade de dinheiro é: " + money + " R$\n" + "Adicionar\n" + "Remover\n" + "Sair")

// while (revelar === "Adicionar") {
//   let add = parseInt(prompt("Quanto quer adicionar? "))
//   let total = money + add
//   revelar = prompt("A quantidade de dinheiro é: " + total + " R$\n" + "Adicionar\n" + "Remover\n" + "Sair")
  
//   if (revelar === "Remover") {
//     let remove = parseInt(prompt("Quanto quer remover? "))
//     lettotal = money - remove
//     revelar = prompt("A quantidade de dinheiro é: " + total + " R$\n" + "Adicionar\n" + "Remover\n" + "Sair")
//   }
// }
// alert("Programa finalizado!")

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser removido:"))
      break
    case "3":
      alert("Saindo...")
      break
    default:
    alert("Opção inválida.")
  }
  

} while (opcao !== "3")