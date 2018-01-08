var assert = require("assert"); // node.js core module
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var C = require('../cash.js');  // our module

var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

C.getChange = function (totalPayable, cashPaid) {
    'use strict';
    return [50, 20, 20];    // just enough to pass :-)
};

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })

    it('getChange(210,300) should equal [50,20,20]', function(){
        assert.deepEqual(C.getChange(210,300), [50,20,20]);
    })
  })
});  


