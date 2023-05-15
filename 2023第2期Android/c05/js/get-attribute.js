let firstItem = document.getElementById('one')
if(firstItem.hasAttribute('class')){
    let classAttri_string = firstItem.getAttribute('class')
    let resultsElement = document.getElementById('scriptResults')
    resultsElement.innerHTML = '<p>這第一個item的class屬性值為:' + classAttri_string + '</p>'
}