function checkUsername(){
    let feedbackElement = document.getElementById('feedback')
    let usernameElement = document.getElementById('username')
    let username = usernameElement.value
    if(username.length < 5){
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    }else{
        feedbackElement.textContent =  ""
    }
}