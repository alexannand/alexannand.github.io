const prestonAPIcurrent = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=14d6c5a90a9134665fdabf6683627f6f&units=imperial';

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

  



const prestonAPIforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=14d6c5a90a9134665fdabf6683627f6f&units=imperial";
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





const request = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    let sodasprings_event_p = document.createElement("div");
    sodasprings_event_p.className ="event-p";
    let sodasprings_event_wrapper = document.createElement("div");
    sodasprings_event_wrapper.className ="event-wrapper";
    let sodasprings_event_h1 = document.createElement("h1");
    sodasprings_event_h1.textContent="Upcoming Events in Soda Springs";
    sodasprings_event_h1.className = "event-title";
    let sodasprings_event_info = document.createElement("div");
    sodasprings_event_info.className = "event-info";
    let sodasprings_event_image = document.createElement("img");
    sodasprings_event_image.className = "event-image";
    sodasprings_event_image.src = "../lesson-11/images/sodasprings-event.jpg";
    for (let i = 0; i < towns[5].events.length; i++ ) {
    let event_p = document.createElement("p");   
    event_p.textContent = towns[5].events[i];
    document.createElement("p").textContent = event_p;
    sodasprings_event_p.appendChild(event_p);
    }
    
    sodasprings_event_wrapper.appendChild(sodasprings_event_h1);
    sodasprings_event_info.appendChild(sodasprings_event_p);
    sodasprings_event_info.appendChild(sodasprings_event_image);
    document.querySelector('div.events').appendChild(sodasprings_event_wrapper);
    document.querySelector('div.events').appendChild(sodasprings_event_info);
  }); 