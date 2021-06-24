$(document).ready(function() {
    $("#searchInput").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIkey = "a4b1e4bae4f8705409a6a6ccacf4d8da";



        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`,


        }).done(function(weatherdata) {

            console.log(weatherdata);



            $("#profile").html(`

            <div class="container">
             <div class="row">
          
                  <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                  <p class="card-text">The Temperature at ${cityname} is = ${weatherdata.main.temp} &#8451; and it is feels like it is ${weatherdata.main.feels_like} &#8451; </p>
                  <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn More About City</a>
                  </div>
                  </div>
          
          </div>
          
          </div>`);





        });


    });
});