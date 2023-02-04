
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


```

### 邏輯運算子

- 針對條件進行邏輯判斷時用到  

| 符號 | 意義 |
|:--|:--|
| && | 左右兩個條件若都為真則為真，否則為假。 |
| 2直值 | 左右兩個條件只要一個為真就是真，否則為假。 |
| ! |  條件若為真則改為假，若為假則改為真。 |
