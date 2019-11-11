// Create Global variables
// Get API KEY for ticketmaster and google maps
// sift through JSON data to retreive objects to attach
// build url to query the API
// Get AJAX call for MapQuest to get geolocation

//ALEX IS WORKING ON MAPQUEST API   "KEEP HERE IN CASE WE NEED TO DO SEPARATE AJAX REQUESTS"
// $('#submit-button').on('click', function(e){
//  	e.preventDefault();
// 	// Create local vars to capture hard test building URL
// 	// Location Input (locInput) can be address, zipcode, city-state, state 
// 	var locInput = $('#locaInput').val().trim();
// 	var mapQuestKey = 'RQ7XoE86cJwEAlzp98Ab2QXty8rv3JTc';
// 	var queryURL1 = "http://www.mapquestapi.com/geocoding/v1/address?key=" + mapQuestKey + "&location=" + locInput;
// 		console.log(queryURL);
// 	$.ajax({
// 		url: queryURL1,
// 		method: "GET"
// 	}).done(function(response){
// 		// Concactonate respose:
// 		var shortCut = response.results[0].locations[0].latLng;
// 		console.log(shortCut);

// 		var lati = shortCut.lat;
// 		var long = shortCut.lng;

// 		console.log(lati);
// 		console.log(long);

// 		// console.log(response.options.maxResults);
// 		console.log(response);
// 		// console.log(response.results[0].locations[0].latLng);
// 		// console.log(response.results[0].locations[0].latLng.lat);
// 		// console.log(response.results[0].locations[0].latLng.lng);

// 		// Empty Form Values
// 		$('#locaInput').val('');
// 		});


// Creat on click event from form to make URLs for 
$('#submit-button').click(function(){
	e.preventDefault();
	// Create local vars to capture hard test building URL
	// Location Input (locInput) can be address, zipcode, city-state, state 
		var locInput = $('#locaInput').val().trim();
		var mapQuestKey = 'RQ7XoE86cJwEAlzp98Ab2QXty8rv3JTc';
		var queryURL1 = "http://www.mapquestapi.com/geocoding/v1/address?key=" + mapQuestKey + "&location=" + locInput;
			console.log(queryURL);

// Multiple Ajax Request Code
	$.when(
		// MapQuest API Request:
		$.ajax({
			url: queryURL1,
			method: 'GET',
			success: function(data) {
				alert('MapQuest request complete')
			}
		}).done(function(response1){
			// Concactonate respose:
				var shortCut = response.results[0].locations[0].latLng;
			// Show in console
				console.log(shortCut);
			// Separate lattitude and longitude
				var lati = shortCut.lat;
				var long = shortCut.lng;
			// Show in console
				console.log(lati);
				console.log(long);
		}),
		// TicketMaster API Request:
		// $.ajax({
		// 	url: '/echo/html/',
		// 	success: function(data) {
		// 		alert('request complete')
		// 	}
		// })
	).then( function(){
		alert('all complete');
	});
});

// End of Ajax Request		


// Get AJAX call for ticketmaster to get events and locations
// Using Jquery create an onclick event listener (to retrieve user inputs)
// create flow to manipulate data from JSON
// dynamically generate html content
// post data onto the html

//alert("click");

	// var artist = $("#artist").val().trim();
	// var venue = $("#venue").val().trim();
	// var ticketSales = $("#ticket-sales").val().trim();
	// var timeDate = $("#time-date").val().trim();


	// console.log(artist);
	// console.log(venue);
	// console.log(ticketSales);
	// console.log(timeDate);

    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip()
    //   })

	
