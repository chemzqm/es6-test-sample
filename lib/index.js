'use strict'
require('babel-polyfill')

function getCat () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve('(=^ ^=)')
    }, 300)
  })
}

async function cat () {
  var str = await getCat()
  return str
}

module.exports = cat
