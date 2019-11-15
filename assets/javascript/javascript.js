// Create Global variables
// Get API KEY for ticketmaster and google maps
// sift through JSON data to retreive objects to attach
// build url to query the API
// Get AJAX call for maps to get geolocation 
// Get AJAX call for ticketmaster to get events and locations
// Using Jquery create an onclick event listener (to retrieve user inputs)
// create flow to manipulate data from JSON
// dynamically generate html content
// post data onto the html



// var artist = $("#artist").val().trim();
// 	var venue = $("#venue").val().trim();
// 	var ticketSales = $("#ticket-sales").val().trim();
// 	var timeDate = $("#time-date").val().trim();



$("#submit-button").on('click', function (e) {
	e.preventDefault()
	var queryParams = {
		classificationName: $("#genre").val().trim(),
		city: $("#cityName").val().trim(),
		stateCode: $("#stateCode").val().trim(),
		apiKeyTM: "U2uyEsPGavnqxKAoaEf7KohDoHPNsEhV",
		apiKeyMp: "wd58REXOMx1iWtM5reOp71waaBO1BxAc"
	};
	var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=" + queryParams.apiKeyTM + "&classificationName=" + queryParams.classificationName + "&city=" + queryParams.city + "&stateCode=" + queryParams.stateCode;
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response);
		var events = response._embedded.events;
		for (var i = 0; i < events.length; i++) {
			var col1 = $("<td>").text(events[i].name);
			var col2 = $("<td>").text(events[i]._embedded.venues[0].name);
			var col3 = $("<td>").text("$" + events[i].priceRanges[0].min + " - $" + events[i].priceRanges[0].max);
			var col4 = $("<td>").text(moment(events[i].dates.start.dateTime, "YYYYMMDD").format("LLLL"));
			var tr = $("<tr>").append(col1, col2, col3, col4);
			$("#concert-body").append(tr);
		}
	});
	// var queryURL2 = "http://www.mapquestapi.com/directions/v2/route?key="+apiKeyMp;
	// $.ajax({
	// 	url: queryURL2,
	// 	Method: "GET"
	// }).then(function(response){
	// 	console.log(response)
	// })
});
  // Grab text the user typed into the search input, add to the queryParams object
//   queryParams.q = $("#search-genre")
//     .val()
//     .trim();
// 	  }

