let today = new Date();
let hourNow = today.getHours();
let greeting:string;

if(hourNow > 18){
    greeting = 'Good evening!';
}else if(hourNow > 12){
    greeting = 'Good afternoon!';
}else if(hourNow > 0){
    greeting = 'Good morning';
}else{
    greeting = 'Welcome!'
}

document.write('<h3>' + greeting + '</h3>')