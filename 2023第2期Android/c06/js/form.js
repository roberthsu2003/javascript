let formElement = document.getElementById('formSignup')
let packageElement = document.getElementById('package')

formElement.addEventListener('submit', (event) => {
    console.log('submitting')
    event.preventDefault()
})

packageElement.addEventListener('change', (event) => {
    console.log('changing')    
})