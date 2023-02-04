## 數值計算與資料輸入

### 算數運算子

| 運算子 | 說明 | 範例 |
|:--|:--|:--|
| + | 加 | 6 + 9 |
| - | 減 | 20 - 15 |
| * | 乘 | 3 * 7|
| / | 除 | 10 / 5 |
| % | 餘數 | 8 % 3 |
| ** | 次方 | 5 ** 2 |


### javascript輸出

- cosole.log()

```javascript
console.log(6+9)
console.log(20-15)
console.log(3*7)
console.log(10/3)
console.log(8%3)
console.log(5**2)

結果:===================
15
5
21
3.3333333333333335
2
25
```

### 建立變數
- let

```javascript
let myFirstVariable;
myFirstVariable = "Hello";
console.log(myFirstVariable)

myFirstVariable = 54321
console.log(myFirstVariable)

結果:===================
Hello
54321
```

### 建立註解

- 單行註解
- 多行註解

```javascript
//單行註解

/*
多行註解
多行註解
多行註解
*/
```

### 數學運算子優先順序

```javascript
優先順序由上而下
()
**
正負
* / % 
+ -
=
```

```javascript
> 2+3*4
14

> (2+3)*4
20

> 2 * (1 + 2) ** 2 - 2 ** 2 * 2
10
```

### javascript的字串插補

```javascript
let firstValue = 10;
let secondValue = 20;
let total = firstValue + secondValue

console.log(`第1個值+第2個值=${total}`)
console.log(`${firstValue}+${secondValue}=${total}`)

結果:===================
第1個值+第2個值=30
10+20=30
```

### javascript的輸入

#### 1.內建的輸入

```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('請輸入您的姓名?', name => {
    console.log(`${name}您好!`);
    readline.close();
});

結果:===================
請輸入您的姓名?徐國堂
徐國堂您好!
```

#### 2.使用prompt-sync
- 安裝:npm install prompt-sync

```javascript
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('請輸入您的姓名?');
console.log(`${name}您好!`);

結果:===================
請輸入您的姓名?robert
robert您好!
```

### Homework(mathop.js)

- 讓使用者輸入被除數(整數)及除數(整數，不可以是零)
- 程式會顯示兩數相除的商及餘數。

```javascript
const prompt = require('prompt-sync')({sigint: true});
let n = prompt('請輸入被除數(整數):');
let m = prompt('請輸入除數(整數,不可以為0):');

console.log(`商:${parseInt(n/m)},餘數:${n%m}`)

結果:===================
請輸入被除數(整數):45
請輸入除數(整數,不可以為0):4
商:11,餘數:1
```

### 複合指定運算子
- x=x+2，可精簡為 x+=2
- y=y-3，可精簡為 y-=3

```javascript
const prompt = require('prompt-sync')({sigint: true});
let money = 50000;
let cell = prompt('請輸入手機金額:');
money -= parseInt(cell);
console.log(`剩餘款為:${money}`)

結果:===================
請輸入手機金額:30000
剩餘款為:20000
```


```javasccript
//請以(複合指定運算子)設計程式,讓用者輸入三個任意數，程式會顯示3數相加的總和(float)

const prompt = require('prompt-sync')({sigint: true});
let sum = 0;
let x = parseFloat(prompt('請輸入第1個數:'))
sum += x;

x = parseFloat(prompt('請輸入第2個數:'))
sum += x;

x = parseFloat(prompt('請輸入第3個數:'))
sum += x;

console.log(`三個數的總和為:${sum}`)

結果:===================
請輸入第1個數:56.45
請輸入第2個數:67.24
請輸入第3個數:31.92
三個數的總和為:155.61
```
