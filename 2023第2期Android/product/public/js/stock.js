let selectedElement = document.querySelector('#stockSelect')

fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => {
            let name = element.name
            let code = element.code
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            optionElement.value = code
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)
        });
    })