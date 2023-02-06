
## 流程控制

- 程式語言可以協助進行資料分析判斷，結果會有成立與不成立兩個方向。
- 條件分析語法計有:
	- 單一選擇
	- 雙向選擇
	- 多向選擇

### 關係運算子

| 符號 | 意義 |
|:--|:--|
| < | 小於 |
| <= | 小於等於 |
|  > | 大於 |
|  >= | 大於等於 |
|  == | 兩邊是否等於 |
|  != | 兩邊是否不等於 |

```javascript

> let x=7
undefined
> x==5
false
> 5<x
true
> x<10
true
```


```javascript
//單項選擇
語法:
if (true|false){
	true區塊
}	

//雙項選擇
語法:
if (true|false){
	true區塊
}else{
	false區塊
}

//多項選擇
if (true|false){
	true區塊
}else if(true|false){
	true區塊
}else{
	false區塊
}

```

```javascript
const prompt = require('prompt-sync')({sigint:true})
let scores = parseInt(prompt("請輸入學生分數:"))
if (scores>=60){
    console.log("及格")
}else{
    console.log("不及格")
}

結果:=============
請輸入學生分數:64
及格
```

```javascrip
下列為換算成績等級的程式碼，換算的規則如下：
• 90(含)~100分為「優」
• 80(含)~89分為「甲」
• 70(含)~79分為「乙」
• 60(含)~69分為「丙」
• 0(含)~59分為「丁」

const prompt = require('prompt-sync')({sigint:true})
let score = parseInt(prompt("請輸入學生分數:"))

if (score >= 90)
    grade = '優'
else if (score >= 80)
    grade = '甲'
else if (score >= 70)
    grade = '乙'
else if (score >= 60)
    grade = '丙'   
else
    grade = '丁'

console.log(`成績等級為：${grade}`)


結果:
輸入學生分數:75
成績等級為：乙
```

### 巢狀選擇

```javascript
• 如果x不是負數，則傳回值為 x ** (1 / y)。
• 如果x是負數而且為偶數，則傳回值為"虛數"。
• 如果x是負數而且為奇數，則傳回值為 -(-x) ** (1 / y)。


const prompt = require('prompt-sync')({sigint:true})
let x = parseInt(prompt('請輸入x:'))
let y = parseInt(prompt('請輸入y:'))

if (x >= 0)
    root = x ** (1 / y)
else{
    if (x % 2 == 0)
        root = "虛數"
    else
        root = (-(-x)) ** (1 / y)
}
console.log(`root=${root}`)


結果:========================
請輸入x:5
請輸入y:6
root=1.3076604860118306
```



### 邏輯運算子

- 針對條件進行邏輯判斷時用到  

| 符號 | 意義 |
|:--|:--|
| && | 左右兩個條件若都為真則為真，否則為假。 |
| 2直值 | 左右兩個條件只要一個為真就是真，否則為假。 |
| ! |  條件若為真則改為假，若為假則改為真。 |

```javascript
const prompt = require('prompt-sync')({sigint:true})
chinese = parseInt(prompt('請輸入國文分數:'))
math = parseInt(prompt('請輸入數學分數:'))

if (chinese == 100 && math == 100)
    console.log("獎金1000元")
else if (chinese == 100 || math == 100)
    console.log("獎金500元")
else
    console.log("沒有獎金")
    
結果:========================
請輸入國文分數:100
請輸入數學分數:100
獎金1000元
```

### HomeWork:BMI 計算後分析
- 請依據 BMI 值分析他人的身體狀況。

| BMI值 | < 18.5 | 18.5-25 | 25-30 | >30 |
|:--|:--|:--|:--|:--|
| 身體狀態 | 太輕 | 正常 | 過重 | 肥胖 |
 
 ```
 #bmi.py
 結果==================
 請輸入身高,單位為(公分):177
 請輸入體重,單位為(公斤):80
 
 您的BMI是25.53544
 「您的體重過重」
 ```

## 迴圈

### while()

```javascript
//2 - 10所有偶數的總和
let sum = 0
let i = 2
while(i <= 10){
    sum += i
    process.stdout.write(`第${i/2}次迴圈的i =${i},總和為:${sum}\n`);
    i += 2
}

結果==================
第1次迴圈的i =2,總和為:2
第2次迴圈的i =4,總和為:6
第3次迴圈的i =6,總和為:12
第4次迴圈的i =8,總和為:20
第5次迴圈的i =10,總和為:30
```

### 無限定次數的迴圈
```javascript

//小明想要存錢買一輛機車,機車每輛30000元，他將每月存的錢輸入，當存款足夠買機車時，就顯示提示訊息告知。
prompt = require('prompt-sync')({sigint:true})

let deposit = 0
let num = 0
while(deposit < 30000){
    num += 1
    inputNum = parseInt(prompt('請輸入第'+num+"個月份的存款:"))
    deposit += inputNum
}
console.log(`恭喜!已經存夠了，存了${num}個月的總存款為:${deposit}元。`)

結果==================
請輸入第1個月份的存款:4576
請輸入第2個月份的存款:4567
請輸入第3個月份的存款:3456
請輸入第4個月份的存款:4567
請輸入第5個月份的存款:3456
請輸入第6個月份的存款:4567
請輸入第7個月份的存款:5678
恭喜!已經存夠了，存了7個月的總存款為:30867元。
```

### 使用break跳出迴圈

```javascript
//小美是一位教師，請你以while迴圈方式為小美設計一個輸入成績的程式，如果輸入負數表示成績輸入結束，在輸入成績結束後顯示班上總成績及平均成績

//小美是一位教師，請你以while迴圈方式為小美設計一個輸入成績的程式，如果輸入負數表示成績輸入結束，在輸入成績結束後顯示班上總成績及平均成績
const prompt = require('prompt-sync')({sigint:true})

let num = 0
let sum = 0
while(true){
    
    let score = parseInt(prompt('請輸入第'+ (num+1) +'學生的成績:'))    
    if(score < 0)
        break    
    num += 1
    sum += score
}   
//已經跳出while    
console.log(`全班總成績為:${sum}, 平均分數為:${(sum/num).toFixed(2)}`)


結果==================
請輸入第1學生的成績:76
請輸入第2學生的成績:89
請輸入第3學生的成績:72
請輸入第4學生的成績:65
請輸入第5學生的成績:91
請輸入第6學生的成績:-1
全班總成績為:393, 平均分數為:78.60
```

#### Homework:計算固定中的支出，媽媽每天會將家裡的花費記錄下來，並且計算本週的花費總和

```javascript
prompt = require('prompt-sync')({sigint:true});
let sum = 0;
let i = 1;
while(true){
    if(i==7){
        var n = parseInt(prompt('請輸入星期日的支出:'))
        break
    }
    else{
        let output = "請輸入星期" + i + "的支出:"
        var n = parseInt(prompt(output))
    }
    sum += n
    i += 1
}
    
console.log(`本星期的支出為:${sum}元`)

結果==================
請輸入星期1的支出:456
請輸入星期2的支出:345
請輸入星期3的支出:456
請輸入星期4的支出:345
請輸入星期5的支出:234
請輸入星期6的支出:345
請輸入星期日的支出:567
本星期的支出為:2181元
```

### 使用continue,中止現在迴圈,跳至下一輪迴圈,重頭執行

```javascript
//請設計一個程式，讓使用者輸入數值，只有加總正偶數值，不加總正奇數值，如果輸入負數，結束程式。
const prompt = require('prompt-sync')({sigint:true})
let num = 0
let sum = 0
while(true){
    num += 1    
    let inputNum = parseInt(prompt("請輸入第"+ num + "個數值:"))
    if(inputNum < 0)
        break
    else if (inputNum % 2 == 1)
        continue
    else
        sum += inputNum
}
console.log(`所有輸入的正偶數的加總是:${sum}`)

結果==================
請輸入第1個數值:1
請輸入第2個數值:2
請輸入第3個數值:3
請輸入第4個數值:4
請輸入第5個數值:5
請輸入第6個數值:6
請輸入第7個數值:7
請輸入第8個數值:8
請輸入第9個數值:9
請輸入第10個數值:-1
所有輸入的正偶數的加總是:20
```

### 使用for...in迴圈

```javascript
var  rabbits = ['Flopsy', 'Mopsy', 'Cottontail', 'Peter']
for (index in rabbits)
    console.log(rabbits[index])
    
結果==================    
Flopsy
Mopsy
Cottontail
Peter
```

### 執行固定次數的迴圈for

```javascript

//2 - 10所有偶數的總和
let sum = 0
for(let i=2; i <= 10; i+=2){
    sum += i
    process.stdout.write(`第${i/2}次迴圈的i =${i},總和為:${sum}\n`);
}


結果:====================
第1次迴圈的i =2,總和為:2
第2次迴圈的i =4,總和為:6
第3次迴圈的i =6,總和為:12
第4次迴圈的i =8,總和為:20
第5次迴圈的i =10,總和為:30
```

```javascript

//計算固定中的支出，媽媽每天會將家裡的花費記錄下來，並且計算本週的花費總和
const prompt = require('prompt-sync')({sigint:true})
let sum=0
for(var i=1; i<=7; i++){
    if(i==7){
        var n = parseInt(prompt("請輸入星期日的支出:"))   
    }else{        
        var n = parseInt(prompt("請輸入星期" + i + " 的支出:"))
    }
    

    sum += n;
}

console.log("本星期的支出為:" + sum + "元")


結果================== 
請輸入星期1 的支出:234
請輸入星期2 的支出:345
請輸入星期3 的支出:456
請輸入星期4 的支出:234
請輸入星期5 的支出:345
請輸入星期6 的支出:567
請輸入星期日的支出:234
本星期的支出為:2415元
```


### 巢狀迴圈

```javascript

for(let i=1; i<=9; i++){
    for(let j=1; j<=9; j++){
        process.stdout.write(`${i}*${j}=${i*j}\t`);
    }
    console.log("")
}
結果:====================
1*1=1   1*2=2   1*3=3   1*4=4   1*5=5   1*6=6   1*7=7   1*8=8   1*9=9
2*1=2   2*2=4   2*3=6   2*4=8   2*5=10  2*6=12  2*7=14  2*8=16  2*9=18
3*1=3   3*2=6   3*3=9   3*4=12  3*5=15  3*6=18  3*7=21  3*8=24  3*9=27
4*1=4   4*2=8   4*3=12  4*4=16  4*5=20  4*6=24  4*7=28  4*8=32  4*9=36
5*1=5   5*2=10  5*3=15  5*4=20  5*5=25  5*6=30  5*7=35  5*8=40  5*9=45
6*1=6   6*2=12  6*3=18  6*4=24  6*5=30  6*6=36  6*7=42  6*8=48  6*9=54
7*1=7   7*2=14  7*3=21  7*4=28  7*5=35  7*6=42  7*7=49  7*8=56  7*9=63
8*1=8   8*2=16  8*3=24  8*4=32  8*5=40  8*6=48  8*7=56  8*8=64  8*9=72
9*1=9   9*2=18  9*3=27  9*4=36  9*5=45  9*6=54  9*7=63  9*8=72  9*9=81
```


### 建立亂數

```javascript

let min = 50
let max = 100
let randomNum = parseInt(Math.random()*10e15)
let guess = randomNum % (max-min+1) + min
console.log(guess)
```



