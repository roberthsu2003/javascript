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





