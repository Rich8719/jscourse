(function () {
  let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q='
  let apiKey = '62d89c97aada83d1378c49b38d1d07e4'

  let $location = $("#location")
  let $temp = $("#temp")
  let $getTempButton = $("#getTemp")
  let $cityField = $("#city")
  let $countryField = $("#country")

  getWeather('Washington', 'USA')

  $getTempButton.on('click', function (e) {
    let city = $cityField.val()
    let country = $countryField.val()
    getWeather(city, country)
  })

  function getWeather (city, country) {
    $.ajax({
      url: `${weatherUrl}${city},${country}&APPID=${apiKey}`,

      // Work with the response
      success: function (response) {
        console.log(response)
        updateUiSuccess(response.main.temp, city, country)
      },

      error: function () {
        updateUIError()
      }
    })
  }

  function updateUiSuccess (temp, city, country) {
    $cityField.val('')
    $countryField.val('')
    $location.html(`${city}, ${country}`)
    console.log(temp)
    $temp.html(temp)
  }

  function updateUIError () {
    alert('There was an error getting weather data :(')
  }
})()
