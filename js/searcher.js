/**
 * I  needed to register in the website and request for an API token
 */
var api = {
	root: "https://api.themoviedb.org/3", //the web page
	token: "2e24785394d993f26fba2a923499635d" // my API key
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
