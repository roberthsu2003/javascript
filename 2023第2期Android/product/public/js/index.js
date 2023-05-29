let formElement = document.querySelector('#form')
let allOfDataArray = [];


const setupCurrentDate = () => {
    let current = new Date()
    let year = current.getFullYear()
    let month = current.getMonth()+1
    let date = current.getDate()


    let month_string = String(month).padStart(2,"0")
    let date_string = String(date).padStart(2,"0")
    let current_date_string = `${year}-${month_string}-${date_string}`

    let dateElement = document.querySelector('#warrantyDate')
    dateElement.value = current_date_string
    dateElement.min = current_date_string

}

//setup現在的日期
setupCurrentDate()

const validateName = ()=>{
    let inputNameElement = document.querySelector('#inputName')
    let nameAlertElement = document.querySelector('#nameAlert')
    let productName = inputNameElement.value
    if (productName.length == 0){
        //console.log("沒有填資料")
        nameAlertElement.classList.remove("close")
        return
    }
    allOfDataArray.push({'productName':productName})
}

const validateCodeFormat = () =>{
    let inputCodeElement = document.querySelector('#inputCode')
    let codeAlertElement = document.querySelector('#codeAlert')
    let inputCodeValue = inputCodeElement.value
    
    //正規則表達式
    const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g

    if (inputCodeValue.length == 0 || codePatternReg.test(inputCodeValue) == false){
        //console.log("沒有填資料")
        codeAlertElement.classList.remove("close")
        console.log("執行錯誤")
        return
    }
    allOfDataArray.push({'code':inputCodeValue})
}

const checkRadioValue = () => {
    let radionElements = document.querySelectorAll('.form-check-input')
    radionElements.forEach(element => {
        if(element.checked){
            //console.log(element.value)
            allOfDataArray.push({'catgory':element.value})
        }
    })
}

const warrantyCheck = () =>{
    let checkboxElement = document.querySelector('#warrantyCheck1')
    if (checkboxElement.checked){
        allOfDataArray.push({'warranty':true})
    }else{
        allOfDataArray.push({'warranty':false})
    }
}

const clearAllAlertAndData = ()=>{
    //清除產品警告
    let nameAlertElement = document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")

    //清除code警告
    let codeAlertElement = document.querySelector('#codeAlert')
    codeAlertElement.classList.add("close")

    //清除收集的資料
    allOfDataArray = []
}

formElement.addEventListener('submit',(event)=>{
    clearAllAlertAndData()
    event.preventDefault()
    validateName()
    validateCodeFormat()
    checkRadioValue()
    warrantyCheck()
    console.log(allOfDataArray)
})