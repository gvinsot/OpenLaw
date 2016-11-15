///<reference path='../node_modules/@types/node/index.d.ts'/>

import http = require("http");
import { OpenLaw } from "./app";


http.createServer(function (req:any, res:any) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    OpenLaw.App.Run();

    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');



console.log('Server running at http://127.0.0.1:1337/');  