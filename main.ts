input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor =")
    basic.showString("" + (base_menor))
    basic.showString("Base mayor =")
    basic.showString("" + (base_mayor))
    basic.showString("Altura =")
    basic.showString("" + (altura))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    Area_del_trapecio_ = (base_mayor + base_menor) / 2 * altura
    basic.showString("" + (Area_del_trapecio_))
})
let Area_del_trapecio_ = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Pau")
basic.showString("A01027714")
base_mayor = 20
base_menor = 0.6
altura = randint(1, 200)
