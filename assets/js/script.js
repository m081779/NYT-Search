var query ='';
var numResults ='';
var startYear ='';
var endYear ='';



$('#search').on('click', function () {

	query = $('#input1').val();
	numResults = $('#input2').val();
	startYear = $('#input3').val();
	endYear = $('#input4').val();

	if (startYear.length<8) {
		startYear+="0101";
		console.log(startYear);
	}

	if (endYear.length<8) {
		endYear+="0101";
		console.log(endYear);
	}

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


	queryURL += '?' + $.param({
	  'api-key': "33c676fd7fd14e90a532f9698ab4dd4a",
	  'q': query,
	  'begin_date': startYear,
	  'end_date': endYear
	});
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function (response) {
		var results = response.response.docs;
		for (var i = 0; i<numResults; i++) {
			var h1 = $('<h1>');
			console.log(response);
			
			h1.text(results[i].headline.main)
			console.log('h1: ',h1);
			$('.results').append(h1);
		}
		// for (var i = 0; i< response)
	});
});

$('#clear').on('click', function () {
	$('#results').empty();
});

