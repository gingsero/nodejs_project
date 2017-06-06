var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;

var mongoclient = new MongoClient(new Server('localhost',27017,{'native_parser':true}));
var db = mongoclient.db('testmongo');



var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  fs.readFile('../html/index.html', function(error, data){
    response.writeHead(200, {
      'Content-Type' : 'text/html '
    });
    response.end(data);
  });

}).listen(52273, function(){
  console.log('Server is running at http://127.0.0.1:52273');
});
