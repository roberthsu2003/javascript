const prompt = require('prompt-sync')({sigint:true})
function convertToCelsius(fahrenheit){
	let degCelsius = 5 / 9 * (fahrenheit-32)
	return degCelsius
}
var myFunction = convertToCelsius
let fahrenheit = Number(prompt('請輸入華氏溫度:'))
let celsius = myFunction(fahrenheit)

console.log(`華氏${fahrenheit}等於攝氏${celsius.toFixed(2)}`)