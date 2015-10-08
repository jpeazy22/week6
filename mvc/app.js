// this doens't get refreshed with a page refresh.  if the server resets then this will get wiped out.  when this boots up it's creating the allCostumes array.

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var costumeController = require('./controllers/costumeController')
// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});

app.post('/createcostume', costumeController.createCostume)  // handle that request  with this route handler.  this module was defined in costumeController.js. 
//rount to get 
app.get('/getcostumes', costumeController.getCostumes)  // usually don't camel case routes.
// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);

});