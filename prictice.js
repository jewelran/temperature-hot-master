const apiKey = '5cd0e3cc2778d358d685daec2227a10f';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
const  getWeatherData = city  =>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data=>updataUi(data))
}
const searchBtn = document.getElementById("search_button");
searchBtn.addEventListener("click",()=>{
    const inputCity = document.getElementById("city").value;
    getWeatherData(inputCity)
})
const updataUi = data  => {
    document.getElementById('show_city').innerText=data.name || "Unknown lcocation";
    document.getElementById('show_temperature').innerText=data.main.temp;
    document.getElementById('weather_status').innerText=data.weather[0].main
    document.getElementById("icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.      weather[0].icon}@2x.png`);  
    document.getElementById('city').value="";
}
getWeatherData("dhaka")












