"use strict";
var http = require("http");
var app_1 = require("./bin/app");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    app_1.OpenLaw.App.Run();
    res.end('Hello World\n');
}).listen(process.env.PORT || 8080);
console.log('Server running at http://localhost:8080/');
//# sourceMappingURL=server.js.map