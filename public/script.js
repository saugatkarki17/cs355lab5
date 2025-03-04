const searchField = document.getElementById("searchField")
const insertField = document.getElementById("insertField")
const searchBtn= document.getElementById("searchBtn")
const insertBtn= document.getElementById("insertBtn")
const resultDiv= document.getElementById("results")

insertBtn.addEventListener('click', ()=> {
    fetch('/insert?doc='+ insertField.value)
    .then(r=>r.text())
    .then(txt=> {
        resultDiv.innerHTML =txt;
    });

})
searchBtn.addEventListener('click', ()=> {
    fetch('/search?find='+ searchField.value)
    .then(r=>r.text())
    .then(txt=> {
        resultDiv.innerHTML =txt;
    });

})