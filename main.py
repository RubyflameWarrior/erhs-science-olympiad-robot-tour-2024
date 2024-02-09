basic.show_icon(IconNames.ANGRY)
serial.redirect_to_usb()

"""
def on_every_interval():
basic.show_number(1)
loops.every_interval(500, on_every_interval)

def on_forever():
serial.write_value("Pitch", input.acceleration(Dimension.X))
basic.forever(on_forever)
"""

def myPID(setpoint):
    kP = 1
    kD = 0

    error = setpoint – maqueen.ultrasonic(0)
    derivative = 0
    prevError = 0
    power = 0

    while error > 2:
        error = setpoint – maqueen.ultrasonic(0)
        serial.write_value("Error", error)
        derivative = error – prevError
        prevError = error
        power = error * kP + derivative * kD
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, power)
        basic.pause(15)

myPID(10)