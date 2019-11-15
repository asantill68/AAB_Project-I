// Create Global variables
	// Map Quest Basic URL
	var apiKeyMQ  = 'RQ7XoE86cJwEAlzp98Ab2QXty8rv3JTc';
	var baseURLmq = "http://www.mapquestapi.com/geocoding/v1/address?key=" + apiKeyMQ;

	// TM Quest Basic URL
	// var apiKeyTM = ' ';
	// var apiKeyTM = ' '; 

	//Search Parameters
	// var genreInput  = ' ';
	var lati = ' ';
	var long = ' ';
	var locInput 	= ' ';
	// var radiusInput = 0;

// build url to query the API
// Get AJAX call for MapQuest to get geolocation

//ALEX IS WORKING ON MAPQUEST API   "KEEP HERE IN CASE WE NEED TO DO SEPARATE AJAX REQUESTS"

	// Create local vars to capture hard test building URL
	// Location Input (locInput) can be address, zipcode, city-state, state 
	function runQueryMQ(newURLmq){
		$.ajax({
			url: newURLmq,
			method: "GET"
		}).done(function(dataMQ){
			// sift through JSON data to retreive objects to attach
			var shortCut = dataMQ.results[0].locations[0].latLng;
			console.log(shortCut);

			lati = shortCut.lat;
			long = shortCut.lng;

			console.log(lati);
			console.log(long);

			test();
			// Empty Form Values
			$('#locaInput').val(' ');
			});
	};


	function test (){
		console.log(lati);
		console.log(long);
	};

// Main Processes
    // On click event
	$('#submit-button').on('click', function(e){
		e.preventDefault();
		// Collect data from form using IDs
			//genreInput  = $('# ').val().trim();                                         // Get ID from html
			locInput  	= $('#locaInput').val().trim();
			//radiusInput = $('# ').val().trim();                                         // Get ID from html
		// Update URL MQ
				var newURLmq = baseURLmq + "&location=" + locInput;
				console.log(newURLmq);
        // if (parseInt(radius)){                                                       // Data Check
        //     newURLTM = newURLTM + '&genre =' + radius;                               // Data Check
        // }
     
        runQueryMQ(newURLmq);
        return false;

	});



// var artist = $("#artist").val().trim();
// 	var venue = $("#venue").val().trim();
// 	var ticketSales = $("#ticket-sales").val().trim();
// 	var timeDate = $("#time-date").val().trim();

<<<<<<< HEAD
        


=======


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

>>>>>>> patch-4
