var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(typeof body)
    var data = JSON.parse(body)
    // methods or functions on data
    //console.log(typeof data)
    for(var i = 0; i < data.length; i++){
    	if(process.argv[2] === data[i].name){
    		console.log("r:" + data[i].rgb.r + " g:" + data[i].rgb.g + " b:" + data[i].rgb.b)
    	}
    }
  }
})