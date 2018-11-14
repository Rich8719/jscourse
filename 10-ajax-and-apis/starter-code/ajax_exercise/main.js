// /*

// - Refactor the codealong to work with user interaction. In the index.html file
// there is a "Get Consumer Finance Data" button. When the user clicks the button,
// pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
// Handle the link success and error responses accordingly, displaying results in
// console.log() if successful.

// - Separate your logic so that you can use your functions for another user button
// click of "Get Custom Data", which will make a request to 
// https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

// */

// 'use strict';
// (function () {
//   let httpRequest = undefined
//   document.getElementById('getDataButton').onclick = function () {
//     console.log('making request')
//     makeRequest('http://data.consumerfinance.gov/api/views.json')
//   }

  document.getElementById('getDataButton').onclick = function () {
    console.log('Making request')
    makeRequest('http://data.consumerfinance.gov/api/views.json')
  }

  document.getElementById('getCustomDataButton').onclick = function () {
    console.log('Making request')
    makeRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD')
  }

  function makeRequest (url) {
    $.ajax({
      url: url, 
      success: function(response) {
        console.log(response)
      },
      error: function () {
        console.log('there was an error')
      }
    })
    // httpRequest = new XMLHttpRequest()

    // if (!httpRequest) {
    //   console.log('Cannot create an XMLHttpRequest instance')
    //   return false
    // }
    // httpRequest.onreadystatechange = responseMethod
    // httpRequest.open('GET', url)
    // httpRequest.send()
  }

//   function responseMethod () {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         console.log(httpRequest.responseText)
//       } else {
//         console.log('Error: there was a problem with the request.')
//       }
//     }
//   }
// })()