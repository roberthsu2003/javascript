function playGame() {
    let min = 1
    let max = 100
    let count = 0
    let randomNum = parseInt(Math.random() * 10e15)
    let guess = randomNum % (max - min + 1) + min
    console.log("===============猜數字遊戲=================:\n")
    console.log(guess)
    while (true) {
        count += 1
        keyin = parseInt(prompt(`猜數字範圍${min}~${max}:`))
        if (keyin >= min && keyin <= max) {
            if (keyin == guess) {
                console.log(`賓果!猜對了, 答案是:${keyin}`)
                console.log(`您猜了${count}次`)
                break
            } else if (keyin > guess) {
                max = keyin - 1
                console.log("再小一點")
            } else if (keyin < guess) {
                min = keyin + 1
                console.log("再大一點")
            }
            console.log(`您已經猜了${count}次`)

        } else {
            console.log("請輸入提示範圍內的數字")
        }
    }

}

const prompt = require('prompt-sync')({ sigint: true })
while(true){
    playGame()
    let playAgain = prompt("請問還要繼續遊戲嗎?(y or n)")
    if(playAgain == 'n'){
        break
    }
}

console.log("遊戲結束")


