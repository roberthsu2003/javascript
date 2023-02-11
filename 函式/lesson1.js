const prompt = require('prompt-sync')({sigint:true})
function convertToCelsius(fahrenheit){
	let degCelsius = 5 / 9 * (fahrenheit-32)
	return degCelsius
}

let fahrenheit = Number(prompt('請輸入華氏溫度:'))
let celsius = convertToCelsius(fahrenheit)

console.log(`華氏${fahrenheit}等於攝氏${celsius.toFixed(2)}`)