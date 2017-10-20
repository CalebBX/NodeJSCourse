const utils = require('./utils.js');
const expect = require('expect');

describe('Utils', function(){
    
    it('should add 2 numbers', function(){
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });
    it('should async add 2 numbers', function(done){
        var res = utils.asyncAdd(33, 11, function(sum){
            expect(sum).toBe(44).toBeA('number');
            done();
        });
    });
    it('should square a number', function(){
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });
    it('should async square a number', function(done){
        var res = utils.asyncSquare(5, function(square){
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });
    it('should verify first and last names are set', function(){
        var user = {location: 'Dayton', age: 18};
        var res = utils.setName(user, 'Caleb Breaux');
        expect(res).toInclude({
            firstName: 'Caleb', lastName: 'Breaux'
        });
    });
});

