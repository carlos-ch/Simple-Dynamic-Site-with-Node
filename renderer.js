const fs = require('fs');
// (4.) Function that handles the reading of files and merge in value
function view(templateName, values, response) {
  //read from file and get a string
  const fileContents = fs.readFileSync('./views/' + templateName + '.html');
  // merge file in to the string

  // Write out the response

  response.write(fileContents);
}

module.exports.view = view;
