input.onButtonPressed(Button.A, function () {
    while (B == 0) {
        basic.pause(1000)
        tid += 1
    }
    basic.pause(100)
    B = 0
})
input.onButtonPressed(Button.AB, function () {
    B = 1
    tid = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tid)
})
let tid = 0
let B = 0
B = 0
