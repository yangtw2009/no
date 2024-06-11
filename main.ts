let img = 0
input.onGesture(Gesture.Shake, function () {
    img = randint(0, 2)
    if (img == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (img == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . # . .
            . . . . #
            . . . # #
            # # . . .
            # . # # #
            `)
    }
})
