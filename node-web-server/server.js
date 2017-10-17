const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send({
        name: 'Caleb',
        likes: ['skiing', 'music', 'computers']
    });
});

app.get('/about', function(req, res){
    res.send('About page')
});

app.get('/bad', function(req, res){
   res.send({
       errorMessage: 'Unable to handle request.'
   }); 
});
app.listen(3000, function(){
    console.log('Server is up on port 3000');
});