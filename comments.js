//Create web server
//Create a web server that listens on port 3200. When you visit http://localhost:3200/ in your browser, the server should respond with a status code of 200 and a response body of "OK".
const http = require('http');
const port = 3200;

const requestHandler = (request, response) => {
  response.end('OK');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});