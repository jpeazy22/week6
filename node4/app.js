var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('seville.html', {root: './public'})
});

// app.get('/:destination', function(req, res){
// 	console.log(req.params.destination);
  	// res.sendFile(req.params.destination + ".html", {root: './public'}) 
// });

app.get('/:destination', function(req, res){
  	fs.readFile('./public/' + req.params.destination + ".html", function(err, data){
  		if(err){
  			console.log(err)
  			res.send("Mr Magellan didn't go there!")
  		} else {
  			res.header('Content-Type', 'text/html');
  			res.send(data)
  		}
  	});
});

// app.get('/canaryIslands', function(req, res){
// 	res.sendFile('canaryIslands.html', { root: './public'})
// });

// app.get('/capeVerde', function(req, res){
// 	res.sendFile('capeVerde.html', {root: './public'})
// });

// app.get('/straitofMagellan', function(req, res){
// 	res.sendFile('straitofMagellan.html', {root: './public'})
// });

// app.get('/guam', function(req, res){
// 	res.sendFile('guam.html', {root: './public'})
// });

// app.get('/philippines', function(req, res){
// 	res.sendFile('philippines.html', {root: './public'})
// })

app.get('/')


var port = 3000
app.listen(port, function(){
	console.log('server is on the run ' + port);
})