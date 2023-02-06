let min = 50
let max = 100
let randomNum = parseInt(Math.random()*10e15)
let guess = randomNum % (max-min+1) + min
console.log(guess)