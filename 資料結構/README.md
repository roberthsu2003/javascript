## 資料結構(object,array)
- object是key,value的資料結構
- array是有順序的集合資料


### 使用array literal建立

```javascript
var empty = [];  //空陣列
var primes = [2, 3, 5, 7, 11]; //5個數值元素
var misc = [ 1.1, true, "a" ]; //3個不同資料類型元素
```

#### 可以保含其它集合物件

```javascript
var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];
```

### 使用Array()建構式建立

```javascript
var a = new Array(); 建立空陣列
var a = new Array(10); 建立10個元素
var a = new Array(5, 4, 3, 2, 1, "testing, testing"); //建立6個元素
```

### 使用Array 索引編號增加元素和property length查元素數量

```javascript
var names = [];
names[0] = "Paul";
names[1] = "Jeremy";
names[11] = "Nick";

console.log(names[0])
console.log(names[1])
console.log(names[2])

console.log(`陣列元素的長度是${names.length}`)


結果:===============
Paul
Jeremy
undefined
陣列元素的長度是12
```

#### 使用push()增加元素

```javascript
var names = [];
names.push("Jeremy");
names.push("Paul");

console.log(names[0])
console.log(names[1])

結果:=========
Jeremy
Paul
```

#### 使用concat()連接陣列

```javascript
var names = [ "Paul", "Jeremy", "Nick" ]; 
var ages = [ 31, 30, 31 ];
var concatArray = names.concat(ages);


結果:=======
[ 'Paul', 'Jeremy', 'Nick', 31, 30, 31 ]
```


#### 使用slice()切割

```javascript
var names = [ "Paul", "Sarah", "Jeremy", "Adam", "Bob" ];
var slicedArray = names.slice(1,3);

console.log(slicedArray)

結果:===============
[ 'Sarah', 'Jeremy' ]
```

#### 使用join()

```javascript
var myShopping = [ "Eggs", "Milk", "Potatoes", "Cereal", "Banana" ];
var myShoppingList = myShopping.join("<br />");

console.log(myShoppingList)

結果:===============
Eggs<br />Milk<br />Potatoes<br />Cereal<br />Banana
```

### 使用sort()

```javascript
var names = [ "Paul", "Sarah", "Jeremy", "Adam", "Bob" ];
names.sort();
console.log("排序後的結果:");
for (var index = 0; index < names.length; index++) { 
    console.log(names[index])
}

結果:================
排序後的結果:
Adam
Bob
Jeremy
Paul
Sarah
```

### 使用reverse()

```javascript
var myShopping = [ "Eggs", "Milk", "Potatoes", "Cereal", "Banana" ];
myShopping.reverse();

console.log("reverse後的結果:");
for (var index = 0; index < myShopping.length; index++) { 
    console.log(myShopping[index])
}

結果:========================
reverse後的結果:
Banana
Cereal
Potatoes
Milk
Eggs
```

#### 搜尋Array內的元素indexOf(),lastIndexOf() 

```javascript
var colors = [ "red", "blue", "green", "blue" ];

console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("blue"));

結果:===========
0
3
```

####  forEach() 和 map() Methods

```javascript
var numbers = [ 1, 2, 3, 4, 5 ];
for (var i = 0; i < numbers.length; i++) {
    var result = numbers[i] * 2; 
    console.log(result)
}

console.log("==================")
for (index in numbers){
    var result = numbers[index] * 2; 
    console.log(result)
}

console.log("==================")
numbers.forEach((value,index,array) => {
    var result = value * 2; 
    console.log(result)
});
console.log("==================")
var result = numbers.map((value,index,array)=>{
    var result = value * 2;
    return result
})

console.log(result)

結果:===========
2
4
6
8
10
==================
2
4
6
8
10
==================
2
4
6
8
10
==================
[ 2, 4, 6, 8, 10 ]
```

## object
### 使用object literal建立

```typescript
var empty = {}; //建立空陣列
console.log(empty)

var point = { x:0, y:0 }; //建立2個property,記任property不可以是字串
console.log(point)
console.log("=========")
var point2 = { x:point.x, y:point.y+1 }; 
console.log(point2)
console.log("=========")
var book = {  //當property有空白,hyphen,保留字可以使用字串
	"main title": "JavaScript",
	'sub-title': "The Definitive Guide",
	"for": "all audiences",
		author: {
		firstname: "David",
		surname: "Flanagan"
		} 
};
console.log(book)
//錯誤 book.for = 3
console.log(book.for)

結果:===================
{}
{ x: 0, y: 0 }
=========
{ x: 0, y: 1 }
=========
{
  'main title': 'JavaScript',
  'sub-title': 'The Definitive Guide',
  for: 'all audiences',
  author: { firstname: 'David', surname: 'Flanagan' }
}
all audiences
```

### 使用object literal建立

```typescript
var o = new Object();
console.log(o)

var a = new Array();
console.log(a)

var d = new Date();
console.log(d)

var r = new RegExp("js");
console.log(r)


結果:=========================
{}
[]
2023-03-16T08:04:16.370Z
/js/
```

### 使用fetch連結Web API

- fetch,then

```typescript
fetch('https://reqbin.com/echo/post/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 1 })
})
    .then(response => console.log(response.status))

結果:============
200

```

```typescript
fetch('https://reqbin.com/echo/post/json', {
    method: 'POST'
})
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))

結果:==================
{"success":"true"}


```

- 非同步await
- await 必需在 async function內執行
```typescript
async function test() {
    const response = await fetch('https://reqbin.com/echo/get/json');

    const json = await response.json();

    console.log(JSON.stringify(json));
}

test()

結果:===========================
{"success":"true"}
```

- await的處理方式
- 新北市公共自行車租賃系統(YouBike)

```typescript

async function test() {
    const response = await fetch('https://data.ntpc.gov.tw/api/datasets/71cd1490-a2df-4198-bef1-318479775e8a/json?size=100');

    let json = await response.json();
    return json
}

test().then(json => {
    console.log(json)
})


```





