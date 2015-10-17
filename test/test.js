/*global describe, it*/
var cat = require('..')
var assert = require('assert')

describe('cat', function () {
  it('should works', function () {
    return cat().then(function (str) {
      assert(str === '(=^ ^=)')
    })
  })
})

