let car1 = prompt("Qual o nome do primeiro carro? ")
let speed1 = parseFloat(prompt("Qual a velocidade do primeiro carro? "))
let car2 = prompt("Qual o nome do segundo carro? ")
let speed2 = parseFloat(prompt("Qual a velocidade do segundo carro? "))

if (speed1 > speed2) {
    alert(car1 + " é mais rápido que o " + car2)
} else if (speed2 > speed1) {
    alert(car2 + " é mais rápido que o " + car1)
} else {
    alert(car1 + " e " + car2 + " possuem a mesma velocidade.")
}
