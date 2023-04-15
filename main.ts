function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
}
let Val = 0
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P9)
basic.forever(function () {
    basic.showIcon(IconNames.Chessboard)
    Val = irRemote.returnIrButton()
    serial.writeValue("IR", Val)
    basic.pause(1000)
    basic.showIcon(IconNames.Diamond)
})
