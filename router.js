const Profile = require("./profile.js");
const renderer = require('./renderer.js');


// (2.) Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  // if url == '/' && GET
  if (request.url === '/') {
    //show search
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
  }
  // if url == '/' && POST
    // redirect to /:username
}


// (3.) Handle HTTP route GET / :username i.e. /chalkers
function user(request, response) {

  // if url == '/...'
  let username = request.url.replace("/", "");
  if (username.length > 0) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    renderer.view("header", {}, response);
    // get json from Treehouse
    var studentProfile = new Profile(username);
    // on 'end'
    studentProfile.on("end", function(profileJSON) {
      // show profile

      //Store the values which we need
      const values = {
        avatarurl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // Simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);

    });

    // on "error"
    studentProfile.on("error", function(error) {
      // show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
    });



  }
}

module.exports.home = home;
module.exports.user = user;
