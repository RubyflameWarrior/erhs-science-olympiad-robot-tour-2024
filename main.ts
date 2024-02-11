basic.showIcon(IconNames.Happy)
serial.redirectToUSB()
//  basic.show_number(25 - maqueen.ultrasonic(PingUnit.CENTIMETERS))
function drive(sets: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    pause(100 * sets)
    maqueen.motorStop(maqueen.Motors.All)
}

function driveBack(sets: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    pause(100 * sets)
    maqueen.motorStop(maqueen.Motors.All)
}

function turn(direction: string, sets: number) {
    if (direction == "left") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    
    pause(261 * sets)
    maqueen.motorStop(maqueen.Motors.All)
}

drive(0.5)
pause(50)
turn("right", 1)
pause(50)
drive(2)
pause(50)
turn("left", 1)
pause(50)
drive(3)
pause(50)
driveBack(1)
pause(50)
turn("right", 1)
pause(50)
drive(1)
//  turn("right", 4)
/** 
PIDMode = 1
sameErrorCount = 0

setpoint = 10

error = setpoint - maqueen.ultrasonic(PingUnit.CENTIMETERS)
previousError = error
derivative = 0
power = 0

def on_every_interval():
    basic.show_number(PIDMode)
    if PIDMode == 1:
        kP = 5
        kD = 0

        error = setpoint - maqueen.ultrasonic(PingUnit.CENTIMETERS)
        if error == previousError:
            sameErrorCount = sameErrorCount + 1
        derivative = error - previousError
        previousError = error
        power = (error * kP)
        # basic.show_number(error)
        if error > 0:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, abs(power))
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, abs(power))
        elif error < 0:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, abs(power))
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, abs(power))
loops.every_interval(10, on_every_interval)

def basicDrive(target):
    global setpoint = target
    global PIDMode = 1
    while sameErrorCount < 10:
        pause(10)
    global PIDMode = 0
    sameErrorCount = 0

# basicDrive(25)
def on_forever():
serial.write_value("Pitch", input.acceleration(Dimension.X))
basic.forever(on_forever)

 */
