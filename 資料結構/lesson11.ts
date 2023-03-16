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