const getNumber = parseFloat(prompt("Digite o valor em metros: "))
const getValue = prompt("Gostaria de converter em qual unidade? \nmm\ncm\ndm\ndam\nhm\nkm")

switch (getValue) {
    case "mm": 
        alert(getNumber + " metros em milímetro (mm) é igual à: " + getNumber * 1000)
        break
    case "cm": 
        alert(getNumber + " metros em centímetro (cm) é igual à: " + getNumber * 100)
        break
    case "dm":  
        alert(getNumber + " metros decímetro (dm) é igual à: " + getNumber * 10)
        break
    case "dam":
        alert(getNumber + " metros em decâmetro (dam) é igual à: " + getNumber / 10)
        break
    case "hm": 
        alert(getNumber + " metros em hectômetro (hm) é igual à: " + getNumber / 100)
        break
    case "km":
        alert(getNumber + " metros em quilômetro (km) é igual à: " + getNumber / 1000)
        break
    default:
        alert("Opção inválida")
}