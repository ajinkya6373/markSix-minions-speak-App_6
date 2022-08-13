const input = document.querySelector("#userInput");
const output = document.querySelector("#output");
const btn = document.querySelector("#translateBtn")
const serverUrl="https://api.funtranslations.com/translate/minion.json"


const createUrl =(text)=>{
    return encodeURI(serverUrl +"?"+"text="+text);
}


const errorHandler =(error)=>{
    console.log("Error Occured",error);
    alert("There is something wrong.Please try again after some time")

}

const translate =()=>{
    let text = input.value;
    fetch(createUrl(text))
    .then(response => response.json())
    .then(json=>{
        output.innerText= json.contents.translated;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", translate);
