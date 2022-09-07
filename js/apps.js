
const API_KEY =`fc31fa605b47a0bfb1939df6e80e324a`

const loadWeatherData =city=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
}

const displayWeather =data=>{
    // const teamprature = document.getElementById('teamprature');
    // teamprature.innerText=data.main.temp;
    setInnertextById('teamprature',data.main.temp)
    setInnertextById('haze',data.weather[0].main)
    // console.log(data.weather[0].main)
}

const setInnertextById =(id, text)=>{
    const teamprature = document.getElementById(id);
    teamprature.innerText=text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value ;
    searchField.value='';

    // set city 
    document.getElementById('city').innerText = searchValue;
    loadWeatherData(searchValue);
})

loadWeatherData('dhaka');

