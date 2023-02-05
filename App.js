const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result= document.getElementById("result");
const button=document.getElementById("Search-btn");

button.addEventListener("click", () => {
        let inpword = document.getElementById("inp-word").value;
        fetch(`${url}${inpword}`)
        .then((response)=>response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML= `<div class="result" id="result">
            <div class="Word">
                <h3>${inpword}</h3>
            </div>
            <p class="Word-meaning">${data[0].meanings[0].synonyms}</p>`;
        })
    
        .catch(() => {
            result.innerHTML=`<h3 class="error">Couldn't find the word</h3>`;
        });
    });