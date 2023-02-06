
//2 - 10所有偶數的總和
let sum = 0
for(let i=2; i <= 10; i+=2){
    sum += i
    process.stdout.write(`第${i/2}次迴圈的i =${i},總和為:${sum}\n`);
}