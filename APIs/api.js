const url = "https://dogapi.dog/api/facts";
let fact = document.querySelector("#fact")
let factPara= document.querySelector("#factPara")



const getFacts = async () => {
    let response = await fetch(url);
    let data = await response.json();
    factPara.innerText = data.facts[0]
}

fact.addEventListener('click',getFacts)