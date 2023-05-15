function checkUsername(){
    let feedbackElement = document.getElementById('feedback')    
    let username = this.value
    if(username.length < 5){
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    }else{
        feedbackElement.textContent =  ""
    }
}
//html handler
let usernameElement = document.getElementById('username')
usernameElement.onblur = checkUsername