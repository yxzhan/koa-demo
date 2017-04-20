const fs = require('fs')
const jsonfile = require('jsonfile')
const path = require('path')

module.exports = {
  sleep (time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve() }, time)
    })
  },
  writeFile (name, data) {
    const fileName = path.resolve('tmp/', name)
    const str = JSON.stringify(data)
    jsonfile.writeFile(fileName, data, function (err) {
      if (err) return console.log(err)
      console.log('File ' + name + ' saved!')
    })
  }
}
