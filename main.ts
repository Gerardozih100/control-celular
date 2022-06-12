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
input.onButtonPressed(Button.A, function () {
    if (Posicion == 181) {
        Posicion = 0
    } else {
        Posicion += 0 + 10
    }
    robotbit.Servo(robotbit.Servos.S1, Posicion)
})
input.onButtonPressed(Button.AB, function () {
    if (PIN == 3) {
        PIN = 0
    } else {
        PIN += 0 + 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Posicion == -1) {
        Posicion = 180
    } else {
        Posicion += 0 - 10
    }
    robotbit.Servo(robotbit.Servos.S1, Posicion)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showArrow(ArrowNames.North)
        if (SERVO == 1) {
            if (Posicion == 181) {
                Posicion = 0
            } else {
                Posicion += 0 + 10
                robotbit.Servo(robotbit.Servos.S2, Posicion)
            }
        }
        if (SERVO == 2) {
            if (Posicion == -1) {
                Posicion = 180
            } else {
                Posicion += 0 - 10
                robotbit.Servo(robotbit.Servos.S3, Posicion)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showArrow(ArrowNames.South)
        if (SERVO == 1) {
            if (Posicion == -1) {
                Posicion = 180
            } else {
                Posicion += 0 - 10
                robotbit.Servo(robotbit.Servos.S2, Posicion)
            }
        }
        if (SERVO == 2) {
            if (Posicion == 181) {
                Posicion = 0
            } else {
                Posicion += 0 + 10
                robotbit.Servo(robotbit.Servos.S3, Posicion)
            }
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showArrow(ArrowNames.West)
        if (Posicion == 181) {
            Posicion = 0
        } else {
            Posicion += 0 + 10
            robotbit.Servo(robotbit.Servos.S1, Posicion)
        }
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showArrow(ArrowNames.East)
        if (Posicion == -1) {
            Posicion = 180
        } else {
            Posicion += 0 - 10
            robotbit.Servo(robotbit.Servos.S1, Posicion)
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
        SERVO = 3
        if (Posicion == 181) {
            Posicion = 0
        } else {
            Posicion += 0 + 180
            robotbit.Servo(robotbit.Servos.S4, Posicion)
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
        if (Posicion == -1) {
            Posicion = 180
        } else {
            Posicion += 0 - 180
            robotbit.Servo(robotbit.Servos.S4, Posicion)
        }
    }
})
let PIN = 0
let SERVO = 0
let Posicion = 0
Posicion = 90
SERVO = 0
PIN = 0
robotbit.Servo(robotbit.Servos.S1, Posicion)
robotbit.Servo(robotbit.Servos.S2, Posicion)
robotbit.Servo(robotbit.Servos.S3, Posicion)
robotbit.Servo(robotbit.Servos.S4, Posicion)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (PIN == 0) {
            Posicion += -2
            robotbit.Servo(robotbit.Servos.S1, Posicion)
        }
        if (PIN == 1) {
            Posicion += -2
            robotbit.Servo(robotbit.Servos.S2, Posicion)
        }
        if (PIN == 2) {
            Posicion += -2
            robotbit.Servo(robotbit.Servos.S3, Posicion)
        }
        if (PIN == 3) {
            Posicion += -2
            robotbit.Servo(robotbit.Servos.S4, Posicion)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (PIN == 0) {
            Posicion += 2
            robotbit.Servo(robotbit.Servos.S1, Posicion)
        }
        if (PIN == 1) {
            Posicion += 2
            robotbit.Servo(robotbit.Servos.S2, Posicion)
        }
        if (PIN == 2) {
            Posicion += 2
            robotbit.Servo(robotbit.Servos.S3, Posicion)
        }
        if (PIN == 3) {
            Posicion += 2
            robotbit.Servo(robotbit.Servos.S4, Posicion)
        }
    }
})
