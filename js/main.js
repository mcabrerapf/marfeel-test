//TEST
// var xhr = new XMLHttpRequest();
// xhr.open("https://api.github.com/users/mcabrerapf", true);
// xhr.setRequestHeader('Content-Type', 'text/xml');
// xmlDocument = xhr.responseXML;
// console.log(xmlDocument.status);
// console.log(xmlDocument)

document.querySelector(".search").addEventListener("submit", function(event){
	event.preventDefault()
	var username = event.target[0].value
	var User = document.querySelector(".user");
	var Repo = document.querySelector(".repo")
	findUser(username)
		.then( returnUser.bind(null, User) )
		.catch( returnError.bind(null, User, Repo) )
	findRepo(username)
		.then( returnRepo.bind(null, Repo) )
		.catch( console.log )
});

function returnUser(elem, response) {
	elem.innerHTML = paintHtmlUser(response)	
}
function paintHtmlUser(response) {
	var userInfo = JSON.parse(response)
	var userHtml='<div class="user-img"><img src="'+ userInfo.avatar_url +'"></div>' + '<div class="user-info">' + '<p><i>'+ userInfo.login +'</i></p>' + '<h1>'+ userInfo.name +'</h1>' + '<p>'+ userInfo.bio +'</p>' + '</div>'
	return userHtml;
}
function returnRepo( elem, response) {
	elem.innerHTML= paintHtmlRepo(response)
}
function paintHtmlRepo(response) {
	var repos = JSON.parse(response)
	var repoHtml = '<h3 class="title">Repositories</h3>'
	repoHtml += '<div class="repos">'
	repos.forEach((repo)=>{
		repoHtml += '<div class="repo-container">' + '<div class="repo-name"><h3>' + repo.name + '</h3></div>' + '<div class="repo-info">' + '<p><i <i class="fa fa-star"></i>:'+  repo.watchers +' <i class="fa fa-code-fork"></i>:' + repo.forks +'</p></div>' + '</div>'
	})
	repoHtml += '</div>'
	return repoHtml;
}
function returnError( User, Repo, error) {
	User.innerHTML= paintHtmlError(error)
	Repo.innerHTML = ''
}
function paintHtmlError(error) {
	var repoHtml = '<p class="error">' + error + '</p>'
	return repoHtml;
}



