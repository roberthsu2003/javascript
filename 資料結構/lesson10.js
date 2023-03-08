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

