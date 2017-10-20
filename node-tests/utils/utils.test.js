const utils = require('./utils.js');
const expect = require('expect');

it('should add 2 numbers', function(){
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    });

it('should square a number', function(){
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
});

it('should verify first and last names are set', function(){
    var user = {location: 'Dayton', age: 18};
    var res = utils.setName(user, 'Caleb Breaux');
    expect(res).toInclude({
        firstName: 'Caleb', lastName: 'Breaux'
    });
});