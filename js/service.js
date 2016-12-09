const findUser = function( username ) {
	return new Promise( function(resolve, reject) {
		var xhr = new XMLHttpRequest(),
		method = "GET",
		url = "https://api.github.com/users/" + username;
		xhr.open(method, url, true);
		xhr.onreadystatechange = function() {
			if ( xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE ) {
				resolve(xhr.responseText)
			} else if (xhr.status === 404) {
				reject('Does Not Exist')
			}
		};
		xhr.send();
	})
}

const findRepo = function( username ) {
	return new Promise( function(resolve, reject){
		var xhr = new XMLHttpRequest()
		xhr.open("GET", "https://api.github.com/users/" + username + "/repos", true);
		xhr.onreadystatechange = () => {
			if ( xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE ) {
				resolve(xhr.responseText)
			} 
		};
		xhr.send();
	})
}
