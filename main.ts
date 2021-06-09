input.onButtonPressed(Button.A, function () {
    if (Venados > 0) {
        Año += 1
        VenPorDef = Venados
        if (VenPorDef > 0) {
            azar = randint(1, 100)
            basic.showNumber(azar)
            if (azar <= 18) {
                Venados += 1
                basic.showNumber(Venados)
            }
            if (azar > 18 && azar <= 58) {
                Venados += -1
                basic.showNumber(Venados)
            }
            if (azar > 58 && azar <= 75) {
                Venados += -1
                basic.showNumber(Venados)
            }
            if (azar > 75 && azar <= 100) {
                Venados += 0
                basic.showNumber(Venados)
            }
        }
    } else {
        basic.showNumber(Año)
    }
})
let azar = 0
let VenPorDef = 0
let Año = 0
let Venados = 0
Venados = 200
Año = 0
