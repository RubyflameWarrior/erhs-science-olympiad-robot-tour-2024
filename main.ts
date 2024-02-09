basic.showIcon(IconNames.Happy)
serial.redirectToUSB()
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
loops.everyInterval(500, function on_every_interval() {
    basic.showNumber(1)
})
basic.forever(function on_forever() {
    serial.writeValue("Pitch", input.acceleration(Dimension.X))
})
