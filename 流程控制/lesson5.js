
//2 - 10所有偶數的總和
let sum = 0
let i = 2
while(i <= 10){
    sum += i
    process.stdout.write(`第${i/2}次迴圈的i =${i},總和為:${sum}\n`);
    i += 2
}