const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'eedd1e51582340e4eb56f12dcc43e443'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = `${result.name}, ${result.sys.country}`

    document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png"
    
    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°`

    let desc = document.querySelector('.desc')
    desc.innerHTML = (result.weather[0].description).toUpperCase()

    let min = document.querySelector('.min')
    min.innerHTML = `${Math.round(result.main.temp_min)}°`

    let max = document.querySelector('.max')
    max.innerHTML = `${Math.round(result.main.temp_max)}°`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)