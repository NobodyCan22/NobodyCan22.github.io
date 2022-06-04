const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.getElementById("date").innerHTML = new Date(document.Date)

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.09699837220583&lon=-111.87595677773281&units=imperial&appid=c50b2a933706495fab439a581827e04e';
fetch(url)
    .then((response) => {
        if(!response.ok) console.log(response.status + ' : ' + response.statusText);
        response.json()
            .then((data) => {
                document.getElementById("currentTemp").innerHTML = data.current.temp;
                document.getElementById("maxTemp").innerHTML = data.daily[0].temp.max;
                document.getElementById("minTemp").innerHTML = data.daily[0].temp.min;
                document.getElementById("windSpeed").innerHTML = data.daily[0].wind_speed;
            });
    });



function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}    


document.getElementById("year").innerHTML = new Date().getFullYear();

