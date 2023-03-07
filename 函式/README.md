# Function(函式)

## 內建function
 
 - parseInt()
 - parseFloat()
 - Number()


## 自訂function 
### 有參數,有傳出值

![](./images/pic1.png)

```javascript

const prompt = require('prompt-sync')({sigint:true})
function convertToCelsius(fahrenheit){
	let degCelsius = 5 / 9 * (fahrenheit-32)
	return degCelsius
}

let fahrenheit = Number(prompt('請輸入華氏溫度:'))
let celsius = convertToCelsius(fahrenheit)

console.log(`華氏${fahrenheit}等於攝氏${celsius.toFixed(2)}`)

結果:==================
請輸入華氏溫度:67
華氏67等於攝氏19.44

```

### 沒有參數,沒有傳出值
```javascript

function make_a_sound(){
    console.log('火車聲')
}

make_a_sound()

結果:==================
火車聲
```






### 利用function簡化邏輯思考能力

```javascript
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

結果:================
===============猜數字遊戲=================:

52
猜數字範圍1~100:52
賓果!猜對了, 答案是:52
您猜了1次
請問還要繼續遊戲嗎?(y or n)y
===============猜數字遊戲=================:

30
猜數字範圍1~100:30
賓果!猜對了, 答案是:30
您猜了1次
請問還要繼續遊戲嗎?(y or n)n
遊戲結束
```

### 區域變數和全域變數

- 使用 let and var 不同的地方
- let 只可以使用在於程式區塊內
- var 可以穿透程式區塊
- let 不能建立global property,var 可以建立global property

```javascript
function varScoping() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 2
}

function letScoping() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 1
}

varScoping()
letScoping()

結果:==================
2
2
2
1
```
 
 
```javascript
 function varAndLetScoping() {
    var x = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 1
}

varAndLetScoping()

結果:
2
1
```
 
```javascript
function nestedScopeTest() {
    if (true) {
        var functionVariable = 1;
        let blockVariable = 2;

        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2

        if (true) {
            console.log(functionVariable); // will print 1
            console.log(blockVariable); // will print 2
        }
    }

    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
}
```

#### let 不能建立global property,var 可以建立global property

```javascript
// Global variables
var x = 1;
let y = 2;
console.log(this.x); // will print 1
console.log(this.y); // will print undefined
```

### 建立function的參考

```javascript
const prompt = require('prompt-sync')({sigint:true})
function convertToCelsius(fahrenheit){
	let degCelsius = 5 / 9 * (fahrenheit-32)
	return degCelsius
}
var myFunction = convertToCelsius
let fahrenheit = Number(prompt('請輸入華氏溫度:'))
let celsius = myFunction(fahrenheit)

console.log(`華氏${fahrenheit}等於攝氏${celsius.toFixed(2)}`)

結果:=============
請輸入華氏溫度:56
華氏56等於攝氏13.33
```


### 將function當作參數

```javascript
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

結果:=========
請輸入溫度:(華氏:1,攝氏:2)1
請輸入華氏溫度:78
攝氏溫度是25.56

結果:===========
請輸入溫度:(華氏:1,攝氏:2)2
請輸入攝氏溫度:25
華氏溫度是77.00
```


