const apiKey = "3ddee68b6c124a35b14193029232008";
const apiUrl = "https://api.weatherapi.com/v1/current.json?&aqi=no&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {

  const response = await fetch(apiUrl + city + `&key=${apiKey}`);
  if(response.status==1006){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display ="none";
  }
  else{
var data = await response.json();
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
  document.querySelector(".humidity").innerHTML = data.current.humidity + " %";
  document.querySelector(".wind").innerHTML = data.current.wind_mph + " mph";
  document.querySelector(".wc").innerHTML = data.current.condition.text;


  if(data.current.condition.text =="Clouds"){
    weatherIcon.src = "img/clouds.png"
  }
  else if(data.current.condition.text =="Clear"){
    weatherIcon.src = "img/clear.png"
  }
  else if(data.current.condition.text =="Rain"){
    weatherIcon.src = "img/rain.png"
  }
  else if(data.current.condition.text =="Drizzle"){
    weatherIcon.src = "img/drizzle.png"
  }
  else if(data.current.condition.text =="Mist"){
    weatherIcon.src = "img/mist.png"
  }
  
  else if(data.current.condition.text =="Snow"){
    weatherIcon.src = "img/snow.png"
  }
  else if(data.current.condition.text =="Partly cloudy"){
    weatherIcon.src = "img/partly cloudy.jpg"
  }
 
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
