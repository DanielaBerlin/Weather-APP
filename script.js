const api = {
    key: "d457a24e58dcf1c2103f29e685097508",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
    }
}

function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
}

function displayData (response) {
    // console.log(response)
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city";
        search.value = "";
    } else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;
    }
}