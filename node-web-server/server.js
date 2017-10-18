const express = require('express');
const hbs = require('hbs');

var app = express();


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', function(req, res){
    res.render('about.hbs', {
       pageTitle: 'About Page',
       currentYear: new Date().getFullYear()       
    });
});

app.get('/bad', function(req, res){
   res.send({
       errorMessage: 'Unable to handle request.'
   }); 
});
app.listen(3000, function(){
    console.log('Server is up on port 3000');
});