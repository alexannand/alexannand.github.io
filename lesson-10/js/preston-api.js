const prestonAPIcurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=abdae41d051b90c3354abd81c4cdf5b5&units=imperial';

fetch(prestonAPIcurrent)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("current").innerHTML = jsObject.weather[0].main;
    document.getElementById("high").innerHTML = jsObject.main.temp;
    document.getElementById("humidity").innerHTML = jsObject.main.humidity + " %";
    document.getElementById("speed").innerHTML = jsObject.wind.speed;
    var t = parseFloat(document.getElementById("high").innerHTML);  
    var s = parseFloat(document.getElementById("speed").innerHTML);
    var f = 0;
    if (t <= 50 && s > 3 ){ 
          f= 35.74 + (0.6215 * t) - (35.75 * Math.pow (s, 0.16)) + (0.4275 * t * Math.pow (s, 0.16));
          f= Math.round(f);
          document.getElementById("chill").innerHTML = f;
      }
    else {
          document.getElementById("chill").innerHTML = "N/A";
      }
  });  

  


const prestonAPIforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f69138eabaf7b974bb7452d338551399&units=imperial";
fetch(prestonAPIforecast)
  .then((response) => response.json())
  .then((prestonForecastObject) => {
    console.log(prestonForecastObject);
    d = 1;
    for (let i = 0; i < prestonForecastObject.list.length; i++) {
    if (prestonForecastObject.list[i].dt_txt.includes("18:00:00")) {
        let td = prestonForecastObject.list[i].dt;
        let date = new Date(td * 1000);
        let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        let dayOfWeek = weekDays[date.getDay()];
        document.getElementById('day-' + d).textContent = dayOfWeek;        
        document.getElementById('icon-' + d).setAttribute('src', 'https://openweathermap.org/img/w/' + prestonForecastObject.list[i].weather[0].icon + '.png'); 
        document.getElementById('icon-' + d).setAttribute('alt', prestonForecastObject.list[i].weather[0].description);
        document.getElementById('temp-' + d).textContent = Math.round(prestonForecastObject.list[i].main.temp_max) + " °F";
        d++;
    }
}
  });