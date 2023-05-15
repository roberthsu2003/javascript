//event listener with parameters
// document.getElementById('username').addEventListener('keyup', function(event){
//     console.log(event.target.value)
// }
/*
function checkUsername(event){
    let feedbackElement = document.getElementById('feedback')    
    let username = event.target.value
    if(username.length < 5){
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    }else{
        feedbackElement.textContent =  ""
    }
}
document.getElementById('username').addEventListener('blur', checkUsername, false);
*/

document.getElementById('username').addEventListener('blur', function(event){
    let feedbackElement = document.getElementById('feedback')
    let username_string = event.target.value
    console.log(username)
    if(username_string.length < 5){
        feedbackElement.textContent = "使用者的名綱必需大新5個字元"
    }else{
        feedbackElement.textContent =  ""
    }
}, false);
