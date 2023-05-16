function reqListener() {
    console.log(this.responseText);
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');    
    const req = new XMLHttpRequest();
    req .onreadystatechange = handleStateChange;
    req.addEventListener("load", reqListener);
    req.open("GET", "http://www.example.org/example.txt");
    req.send();
}
window.addEventListener('load', windowload)