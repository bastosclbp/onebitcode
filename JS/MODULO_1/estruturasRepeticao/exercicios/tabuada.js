const number = parseFloat(prompt("Informe o número que deseja fazer a tabuada: "))

let result = ""

for (let count = 1; count <=20; count++) {
  result += number + " x " + count + " = " + (number*count) + "\n"
}

alert("Resultado da tabuade de " + number + ":\n\n" + result)