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