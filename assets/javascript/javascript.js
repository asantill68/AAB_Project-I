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

test();



        


