const prompt = require('prompt-sync')({sigint:true})
function convertToCelsius(fahrenheit){
	let degCelsius = 5 / 9 * (fahrenheit-32)
	return degCelsius
}

function convertToFahrenheit(celsius){
    let degFahrenheit = 9 / 5 * celsius + 32
    return degFahrenheit
}

function convert(converter, temperature){
    return converter(temperature)
}

let convert_sign= prompt("請輸入溫度:(華氏:1,攝氏:2)")


if(convert_sign == "1"){
    let fahrenheit = Number(prompt("請輸入華氏溫度:"))
    let celsius = convert(convertToCelsius,fahrenheit)
    console.log(`攝氏溫度是${celsius.toFixed(2)}`)
}else if(convert_sign == "2"){
    let celsius = Number(prompt("請輸入攝氏溫度:"))
    let fahrenheit = convert(convertToFahrenheit,celsius)
    console.log(`華氏溫度是${fahrenheit.toFixed(2)}`)
}

