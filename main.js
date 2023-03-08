function buttonClicked(){
  var city = document.getElementById("countryInput").value //get the search value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //output the API into console.
    console.log(" Greece Temperature: " + data.main.temp);
    console.log(" Greece Humidity: " + data.main.humidity);
    console.log(" Greece Weather: " + data.weather[0].description);
    console.log(" Greece Wind degree: " + data.wind.deg);
    console.log(" Greece Wind speed: " + data.wind.speed);
    console.log(" Greece timezone: " + data.timezone);

    //output the API into HTML page
    document.getElementById("display1").innerHTML = "Country: " + data.name;
    document.getElementById("display2").innerHTML = "Timezone: " + data.timezone;
    document.getElementById("display3").innerHTML = "Humidity: " + data.main.humidity;
    document.getElementById("display4").innerHTML = "Weather: " + data.weather[0].main;
    document.getElementById("display5").innerHTML = "Weather Description: " + data.weather[0].description;
    document.getElementById("display6").innerHTML = "Wind Degree: " + data.wind.deg;
    document.getElementById("display7").innerHTML = "Wind Speed: " + data.wind.speed;
    document.getElementById("display8").innerHTML = "Temperature: " + data.main.temp;
  });
}



