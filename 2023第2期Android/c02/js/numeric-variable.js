"use strict";
//建立變數
let price;
let quantity;
let total;
//給變數值
price = 10;
quantity = 14;
//計算
total = price * quantity;
let cost_div = document.getElementById('cost');
cost_div.innerText = "$" + total;
