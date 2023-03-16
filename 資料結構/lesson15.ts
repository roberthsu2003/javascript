
async function test() {
    const response = await fetch('https://data.ntpc.gov.tw/api/datasets/71cd1490-a2df-4198-bef1-318479775e8a/json?size=100');

    let json = await response.json();
    return json
}

test().then(json => {
    console.log(json)
})

