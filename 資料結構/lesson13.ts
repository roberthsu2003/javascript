fetch('https://reqbin.com/echo/post/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 1 })
})
    .then(response => console.log(response.status))

// output: 200
