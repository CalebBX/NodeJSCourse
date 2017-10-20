const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', function(){
    it('should return hello world response', function(done){
        request(app)
        .get('/')
        .expect(404)
        .expect(function(res){
            expect(res.body).toInclude({
                error: 'Page not found'
            });
        })
        .end(done);
    });
    
    it('should return my user object', function(done){
        request(app)
        .get('/users')
        .expect(200)
        .expect(function(res){
            expect(res.body).toInclude({
                name: 'Caleb', 
                age: 18
            });
        })
        .end(done);
    });
});
