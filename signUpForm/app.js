var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send('he-ll-o')
// });

app.get('/', function(req, res){
  res.sendFile('form.html', { root: './public'})
  console.log('ugh')
});

app.post('/formsubmit', function(req, res){
  console.log('grrr')
  res.redirect('/success')
})

app.get('/success', function(req, res){
  res.send('success')
})

var port = 3000
app.listen(port, function(){
  console.log('you are viewing this on port ' + port);
})

