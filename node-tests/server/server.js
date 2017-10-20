const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', function(req, res){
    res.send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Caleb',
        age: 18
    }]);
});
app.listen(3000);

module.exports.app = app;