// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// simulating your database of contestants
var contestantsDatabase = []
// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(clientRequest, serverResponse){ //when the browser visits the main folder then the server is going to serverResponsepond by sending the html file declared here.
  serverResponse.sendFile('home.html', {root : './public'})
});

app.get('/getallcontestants', function(clientRequest, serverResponse){
	// serverResponse.send('testing all sdfsfds')
	serverResponse.send(contestantsDatabase)
});

app.post('/postcontestant', function(clientRequest, serverResponse){
	console.log(clientRequest.body)
	contestantsDatabase.push(clientRequest.body)
	serverResponse.send(contestantsDatabase)
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})