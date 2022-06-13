bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (PIN == 3) {
        PIN = 0
    } else {
        PIN += 0 + 1
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showArrow(ArrowNames.North)
        if (SERVO == 1) {
            if (Posicion2 == 181) {
                Posicion2 = 0
            } else {
                Posicion2 += 0 + 10
                robotbit.Servo(robotbit.Servos.S2, Posicion2)
            }
        }
        if (SERVO == 2) {
            if (Posicion3 == -1) {
                Posicion3 = 180
            } else {
                Posicion3 += 0 - 10
                robotbit.Servo(robotbit.Servos.S3, Posicion3)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showArrow(ArrowNames.South)
        if (SERVO == 1) {
            if (Posicion2 == -1) {
                Posicion2 = 180
            } else {
                Posicion2 += 0 - 10
                robotbit.Servo(robotbit.Servos.S2, Posicion2)
            }
        }
        if (SERVO == 2) {
            if (Posicion3 == 181) {
                Posicion3 = 0
            } else {
                Posicion3 += 0 + 10
                robotbit.Servo(robotbit.Servos.S3, Posicion3)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showArrow(ArrowNames.West)
        if (Posicion1 == 181) {
            Posicion1 = 0
        } else {
            Posicion1 += 0 + 10
            robotbit.Servo(robotbit.Servos.S1, Posicion1)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showArrow(ArrowNames.East)
        if (Posicion1 == -1) {
            Posicion1 = 180
        } else {
            Posicion1 += 0 - 10
            robotbit.Servo(robotbit.Servos.S1, Posicion1)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showString("A")
        SERVO = 1
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showString("B")
        SERVO = 2
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showString("C")
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        if (Posicion4 == -1) {
            Posicion4 = 0
        } else {
            Posicion4 += 0 - 105
            robotbit.Servo(robotbit.Servos.S4, Posicion4)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showString("D")
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        if (Posicion4 == 91) {
            Posicion4 = 0
        } else {
            Posicion4 += 0 + 120
            robotbit.Servo(robotbit.Servos.S4, Posicion4)
        }
    }
})
let Posicion4 = 0
let Posicion3 = 0
let Posicion2 = 0
let PIN = 0
let SERVO = 0
let Posicion1 = 0
Posicion1 = 90
SERVO = 0
PIN = 0
Posicion2 = 90
Posicion3 = 90
Posicion4 = 90
robotbit.Servo(robotbit.Servos.S1, Posicion1)
robotbit.Servo(robotbit.Servos.S2, Posicion2)
robotbit.Servo(robotbit.Servos.S3, Posicion3)
robotbit.Servo(robotbit.Servos.S4, Posicion4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (PIN == 0) {
            Posicion1 += -2
            robotbit.Servo(robotbit.Servos.S1, Posicion1)
        }
        if (PIN == 1) {
            Posicion1 += -2
            robotbit.Servo(robotbit.Servos.S2, Posicion1)
        }
        if (PIN == 2) {
            Posicion1 += -2
            robotbit.Servo(robotbit.Servos.S3, Posicion1)
        }
        if (PIN == 3) {
            Posicion1 += -2
            robotbit.Servo(robotbit.Servos.S4, Posicion1)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (PIN == 0) {
            Posicion1 += 2
            robotbit.Servo(robotbit.Servos.S1, Posicion1)
        }
        if (PIN == 1) {
            Posicion1 += 2
            robotbit.Servo(robotbit.Servos.S2, Posicion1)
        }
        if (PIN == 2) {
            Posicion1 += 2
            robotbit.Servo(robotbit.Servos.S3, Posicion1)
        }
        if (PIN == 3) {
            Posicion1 += 2
            robotbit.Servo(robotbit.Servos.S4, Posicion1)
        }
    }
})
