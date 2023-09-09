// let menu = prompt("Escolha uma opção: \n1\n2\n3\n4\nEncerrar")

// while (menu != "Encerrar") {
//   alert("A opção escolhida foi: " + menu)
//   menu = prompt("Escolha outra opção: \n1\n2\n3\n4\nEncerrar")
// }

// alert("Programa finalizado!")

let opcao = "5"

do {
  opcao = prompt("Ecolha uma opção:\n1.\n2.\n3.\n4.\n5. Encerrar")
  
  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1")
      break
    case "2":
      alert("Você escolheu a opção 2")
      break
    case "3":
      alert("Você escolheu a opção 3")
      break
    case "4":
      alert("Você escolheu a opção 4")
      break
    case "5":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida.")
  }

}while (opcao !== "5")