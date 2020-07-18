const fs = require('fs');
// (4.) Function that handles the reading of files and merge in value
function mergeValues(values, content) {
  // Cycle over the keys
  for (let key in values) {
    // replace all {{key}} with value from values object
    content = content.replace("{{" + key +"}}", values[key]);
  }
  // return merged content
  return content;
}

function view(templateName, values, response) {
  //read from file and get a string
  let fileContents = fs.readFileSync('./views/' + templateName + '.html', "utf8");
  // merge file in to the string
  fileContents = mergeValues(values, fileContents);
  // Write out the response

  response.write(fileContents);
}

module.exports.view = view;
