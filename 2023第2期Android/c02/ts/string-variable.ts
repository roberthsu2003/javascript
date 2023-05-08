let user_name:string;
let message:string;

user_name = "徐國堂";
message = "See our upcoming range";

let name_span = document.getElementById('name') as HTMLElement
name_span.innerText = user_name;

let note_div = document.getElementById('note') as HTMLElement
note_div.innerText = message


