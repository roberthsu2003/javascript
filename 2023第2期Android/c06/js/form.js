let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')
let packageHintElement = document.getElementById('packageHint')
let termsElement = document.getElementById('terms')
let termsHintElement = document.getElementById('termsHint')


formElement.addEventListener('submit', (event) => {
    console.log('submitting')
    if(!termsElement.checked){
        termsHintElement.innerText = '必需打勾同意'
        event.preventDefault()
    }
})

packageElement.addEventListener('change', (event) => {
    console.log('changing')
    /*
    for(const option of packageElement.options){
        console.log(option.label)
        console.log(option.value)
    }*/
    let selectedIndex = packageElement.selectedIndex
    if(packageElement.options[selectedIndex].value=='monthly'){
        packageHintElement.innerText = '如果選擇1年,可以省10元美金'
    }else{
        packageHintElement.innerText = '正確的選擇'
    }

})