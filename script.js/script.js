$(document).ready(() => {
  $('#form-submit').submit((e) => {
    performSearch(e);
  });

});

function performSearch(e) {
  var request;
  e.preventDefault();

  request = $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather',
    type: 'GET',
    data: {
           q: $('#city-input').val(),
           appid: '339681240ee1ab898a97f4ee827ccb3b',
           units: 'metric'
    }
  });

  request.done((response) => {
    formatSearch(response)
  });

}

function formatSearch(data) {
  let cityData = data;
  console.log(cityData)
  $('#weather').html(`
           <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>City:Forecast in: ${cityData.name}</h3>
                    <small class="mt-1">Country: ${cityData.sys.country}</small>
                </div>
                <div class="panel-body" col-md-3>
                      <ul class="list-group">
                           <li class="list-group-item">Weather: ${cityData.weather[0].main} Description:${cityData.weather[0].description}</li><hr>
                           <li class="list-group-item">Humidity: ${cityData.main.humidity}</li><hr>
                           <li class="list-group-item">Pressure: ${cityData.main.pressure}</li><hr>
                           <li class="list-group-item">Temperature: ${cityData.main.temp}</li><hr>
                           <li class="list-group-item">Temperature Max: ${cityData.main.temp_max}</li><hr>
                           <li class="list-group-item">Temperature Min: ${cityData.main.temp_min}</li><hr>

                      </ul>
                </div>
           </div>
  
  
  `)
  
}