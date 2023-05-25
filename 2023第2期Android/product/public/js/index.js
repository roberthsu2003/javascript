let formElement = document.querySelector('#form')

let allOfDataArray = [];

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

formElement.addEventListener('submit',(event)=>{
    event.preventDefault()
    validateName()
    console.log(allOfDataArray)
})