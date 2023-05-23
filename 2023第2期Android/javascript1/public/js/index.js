let sarea_array = []
let sareaElement =  document.getElementById('sarea');
let areaNameElement = document.getElementById('areaName')
let tbodyElement = document.getElementById('tbody')
let dialogElement = document.getElementById('dialog')
let mapElement = document.getElementById('map')
let exitElement = document.getElementById('exit')

let youbikedata;

//下拉式選單被選取
sareaElement.addEventListener('change', (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue=sareaElement.options[selectedIndex].value
    if(sarea_array.includes(selectedValue)){
        //console.log(`行政區:${selectedValue}`)
        areaNameElement.innerText = selectedValue
        let trHTML = "" //行政區內的html資訊
        youbikedata.forEach(element => {           
            if (element.sarea == selectedValue){
                if (element.act == "1"){
                    var status = "營業中"
                }else{
                    var status = "維護中"
                }

                trHTML += "<tr>"
                trHTML += "<td>" + element.sna.slice(11) +"</td>"
                trHTML += "<td>" + element.ar +"</td>"
                trHTML += "<td>" + element.tot +"</td>"
                trHTML += "<td>" + element.sbi +"</td>"
                trHTML += "<td>" + element.bemp +"</td>"
                trHTML += "<td>" + element.updateTime + "</td>"
                trHTML += "<td>" + status +"</td>"
                trHTML += `<td><a class="map" href="#" data-sno=${element.sno}>更多</a></td>`
                trHTML += "</tr>"
            }

        });         
        tbodyElement.innerHTML = trHTML
        //取得所有的a元素
        //a元素加入click事件
        //取出a元素的data-sno的屬性值
        //跳出<div class="map">對話欄
        let aElements = document.querySelectorAll('.map')
        aElements.forEach((element)=>{
            element.addEventListener('click',(event)=>{
                event.preventDefault()
                let aElement = event.currentTarget
                //console.log(aElement.dataset.sno)
                mapElement.className = 'overlay'
                
                //加入showMap<div id="showMap"></div>
                let showMapElement =document.createElement('div')
                showMapElement.setAttribute('id','showMap')
                //mapElement.appendChild(showMapElement)
                mapElement.insertBefore(showMapElement,mapElement.childNodes[0])

                youbikedata.forEach(site=>{
                    if (site.sno == aElement.dataset.sno){                        
                        let zoom = 18; // 0 - 18
                        let center = [site.lat, site.lng]; // 中心點座標
                        let map = L.map('showMap').setView(center, zoom);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap', // 商用時必須要有版權出處
                        zoomControl: true , // 是否秀出 - + 按鈕
                        }).addTo(map);
                        let marker = L.marker(center,{
                            title:'站點名稱',
                            opacity:1.0
                        }).addTo(map)                        
                    }
                })
            })
        })
    }
});

//xmlhttpRequest的listener
function reqListener() {    
    youbikedata = JSON.parse(this.responseText)    
    for(const youbike of youbikedata){
        sarea_array.push(youbike.sarea)    
    }
    sarea_array = [...new Set(sarea_array)]
    let optionElement = document.createElement('option')
    optionElement.textContent = '請選擇行政區'
    sareaElement.appendChild(optionElement)
    for(const area of sarea_array){
        let optionElement = document.createElement('option')
        optionElement.textContent = area
        optionElement.setAttribute('value',area)
        sareaElement.appendChild(optionElement)
    }
}

//監聽下載完成的http status
function reqReadyChange(){
    if(this.readyState == 4){
        if(this.status != 200){
            dialogElement.show()        
        }
    }
}

//window被載入的事件
const windowload = (event) => {
    console.log('網頁已經全部被載入');    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.addEventListener("readystatechange",reqReadyChange)
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    /*模擬錯誤的網頁*/
    //req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v1/youbike_immediate.json");
    req.send();
}

window.addEventListener('load', windowload)

//map內的離開的click事件
exitElement.addEventListener('click',(event)=>{
    mapElement.className = 'close'
    let showMapElement = document.querySelector('#showMap')
    showMapElement.remove()
})


