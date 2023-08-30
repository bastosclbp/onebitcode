const attacker = prompt("Insira o nome do atacante:")
const powerAttacker = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defender = prompt("Insira o nome do defensor:")
let life = parseFloat(prompt("Insira quantidade de vida do defensor:"))
const defense = parseFloat(prompt("Qual é o seu poder de defesa:"))
const shield = prompt("O inimigo pussui escudo? (Sim/Não)")

let damage = 0

if (powerAttacker > defense && shield === "Não"){
    damage = powerAttacker - defense
} else if (powerAttacker > defense && shield === "Sim") {
    damage = (powerAttacker - defense) / 2
}

life -= damage

alert(attacker + " causou " + damage + " pontos de dano em " + defender)
alert(
    attacker + "\nPoder de ataque: " + powerAttacker + "\n\n" +
    defender + "\nPontos de vida: " + life +
    "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
)