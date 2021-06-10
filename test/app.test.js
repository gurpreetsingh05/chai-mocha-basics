var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../app');
// Testing Simple Hello World
describe('HelloWorld', function(){
   

    it('It should return hello', function(){
        assert.equal(app.helloworld(),'hello');
    });

    it('It should return type', function(){
        assert.notTypeOf(app.helloworld(),'integer');
    });

    it('It should return length', function(){
        assert.lengthOf(app.helloworld(),5);
    });

    it('It should return addition to two numbers', function(){
        assert.equal(app.addnumbers(2,3),5);
    });

    it('It should return length', function(){
        expect(app.helloworld()).to.be.a('string');
        expect(app.addnumbers(2,2)).to.equal(4);
    });
});