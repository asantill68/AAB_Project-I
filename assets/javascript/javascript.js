// Create Global variables
// Get API KEY for ticketmaster and google maps
// sift through JSON data to retreive objects to attach
// build url to query the API
// Get AJAX call for maps to get geolocation
$('button').on('click', function(e){
	e.preventDefault();

	queryURL = "http://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyDHluTmVleXvATJosAhYBe1mE-rCmqGru0";
		console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
		 });
}); 
// Get AJAX call for ticketmaster to get events and locations
// Using Jquery create an onclick event listener (to retrieve user inputs)
// create flow to manipulate data from JSON
// dynamically generate html content
// post data onto the html

alert("click");

var artist = $("#artist").val().trim();
	var venue = $("#venue").val().trim();
	var ticketSales = $("#ticket-sales").val().trim();
	var timeDate = $("#time-date").val().trim();


	console.log(artist);
	console.log(venue);
	console.log(ticketSales);
	console.log(timeDate);

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

	
