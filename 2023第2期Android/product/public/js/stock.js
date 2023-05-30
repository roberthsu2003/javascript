let selectedElement = document.querySelector('#stockSelect')

fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => {
            let name = element.name
            let code = element.code
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            optionElement.value = code
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)
        });
    })

let formElement = document.querySelector('form')

formElement.addEventListener('submit',(event)=>{
    event.preventDefault()
    //取得股票名稱
    let stockId = selectedElement.value
    if (stockId.length>4){
        return
    }

    //取得年月份
    let monthElement = document.querySelector('input[type="month"]')
    let fullDateString = monthElement.value
    fullDateString = fullDateString.replace("-","")
    fullDateString += "01"
    //整合網址
    let url=`https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${fullDateString}&stockNo=${stockId}`

    console.log(url)
    fetch(new Request(url),{'mode':'cors'})
    .then((response) => {
        return response.json()
    }).then((r) => {
        console.log(r)
    })

})
