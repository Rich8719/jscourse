//parentheses before function is self invoking. the parentheses at the end automatically invokes function stops having to call function. This avoids having to do window.onload or document.ready
(function () { 
	let httprequest = new XMLHttpRequest() //construtor function

	httprequest.onreadystatechange = responseMethod

	function responseMethod(){
		//checks to see if request is done before we do the next part
		if (httprequest.readyState === XMLHttpRequest.DONE){
			console.log(httprequest.readyState)
			if (httprequest.status === 200){ //200 means it's good
				console.log(httprequest.responseText)
			} else {
				console.log('You messed up')
			}
		}
	}

//opens new request accepts parameters
httprequest.open('GET', 'http://data.consumerfinance.gov/api/views.json')
// send request 
httprequest.send()

})()