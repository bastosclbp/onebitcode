let speed = 80

while (speed > 0) {
    alert("O carro está a " + speed + " Km/h")
    speed -= 20
    alert("Diminuindo 20 Km/h...")

    if (speed === 40) {
        break
    }
}

alert("O carro parou.")