input.onButtonPressed(Button.A, function () {
    while (B == 0) {
        basic.pause(1000)
        tid += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    tid = 0
    B = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tid)
    B = 1
})
let tid = 0
let B = 0
B = 0
