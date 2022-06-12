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
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showArrow(ArrowNames.North)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showArrow(ArrowNames.South)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showArrow(ArrowNames.West)
        if (Posicion == 181) {
            Posicion = 0
        } else {
            Posicion += 0 + 10
        }
        servos.P0.setAngle(Posicion)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showArrow(ArrowNames.East)
        if (Posicion == -1) {
            Posicion = 180
        } else {
            Posicion += 0 - 10
        }
        servos.P0.setAngle(Posicion)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showString("A")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showString("B")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showString("C")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showString("D")
    }
})
let Posicion = 0
Posicion = 90
servos.P0.setAngle(Posicion)
basic.forever(function () {
    basic.showNumber(Posicion)
})
