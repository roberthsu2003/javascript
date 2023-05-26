fetch("js/codeSearch.json")
.then(res => res.json())
.then(data => console.log(data))