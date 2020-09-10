var getRawBody = require("raw-body");
var http = require("http");

var server = http.createServer(function (req, res) {
  getRawBody(req)
    .then(function (buf) {
      res.statusCode = 200;
      res.end(buf.toString().split("").reverse().join(""));
    })
    .catch(function (err) {
      res.statusCode = 500;
      res.end(err.message);
    })
});

server.listen(3000);

process.on('SIGTERM', function () {
  server.close();
  process.exit(0);
})