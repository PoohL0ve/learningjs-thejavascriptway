/**
 * A server is a computer that provides data to 
 * other computers
 */

const http = require('http');

const server = http.createServer((request, response) => {
    // by default we'll serve index.html
    let filename = "index.html";
    let contentType = "text/html";
    // if the client is requesting style.css, we'll serve it instead
    if(request.url === "/style.css") {
      filename = "style.css";
      contentType = "text/css";
    }
    fs.readFile(filename, function(err, content) {
      if(err) {
          response.statusCode = 500;
          response.end(`Could not serve ${filename}`);
      }
      else {
          response.statusCode = 200;
          response.setHeader('Content-Type', contentType);
          response.end(content);
      }
    });
  });
// What browser is stating:
//console.log(request.headers)
// http://localhost:3000/

// Use Contro + C to quit