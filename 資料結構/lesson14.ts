fetch('https://reqbin.com/echo/post/json', {
    method: 'POST'
})
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)))
