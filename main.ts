input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.A, function () {
    if (!(started)) {
        basic.showIcon(IconNames.No)
        basic.pause(Math.randomRange(1000, 1001))
        basic.clearScreen()
        started = true
        startTime = input.runningTime()
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.A, function () {
    if (started) {
        reactionTime = input.runningTime() - startTime
        basic.showNumber(reactionTime)
        basic.pause(2000)
        basic.clearScreen()
        started = false
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (started) {
        reactionTime = input.runningTime() - startTime
        basic.showNumber(reactionTime)
        basic.pause(2000)
        basic.clearScreen()
        started = false
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (started) {
        reactionTime = input.runningTime() - startTime
        basic.showNumber(reactionTime)
        basic.pause(2000)
        basic.clearScreen()
        started = false
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    }
})
let reactionTime = 0
let startTime = 0
let started = false
radio.setGroup(17)
basic.forever(function () {
	
})
