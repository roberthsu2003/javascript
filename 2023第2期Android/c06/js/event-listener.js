function checkUsername(){
    let feedbackElement = document.getElementById('feedback')    
    let username = this.value
    if(username.length < 5){
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    }else{
        feedbackElement.textContent =  ""
    }
}

//event listener
/*document.getElementById('button1').addEventListener('click', getText);
*/


document.getElementById('username').addEventListener('blur', checkUsername, false);

