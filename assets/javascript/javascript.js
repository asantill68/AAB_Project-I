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


// 	console.log(artist);
// 	console.log(venue);
// 	console.log(ticketSales);
// 	console.log(timeDate);

//     $(function () {
//         $('[data-toggle="tooltip"]').tooltip()
//       })
$("#submit-button").on('click'), function(e){
	e.preventDefault()
	var queryParams = {
		classificationName: "",
		city: "",
		stateCode: "",
		apiKey: "U2uyEsPGavnqxKAoaEf7KohDoHPNsEhV"
	};
	 
		var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey="+queryParams.apiKey+"&classificationName="+classificationName+"&city="+city+"&stateCode"+stateCode;
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			// var genres = response.segment._embedded.genres;
			// for (var i=0; i<genres.length; i++){
			// 	console.log(i+": "+genres[i].name);
			// }
			console.log(response);
		});
	};

	// $.ajax({
	// 	type:"GET",
	// 	url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=U2uyEsPGavnqxKAoaEf7KohDoHPNsEhV+&classificationName",
	// 	async:true,
	// 	dataType: "json",
	// 	success: function(json) {
	// 				console.log(json);
	// 				// Parse the response.
	// 				// Do other things.
	// 			 }
		
	//   });
	

  // Grab text the user typed into the search input, add to the queryParams object
//   queryParams.q = $("#search-genre")
//     .val()
//     .trim();
// 	  }

