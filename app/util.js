const fs = require('fs')
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
    fs.writeFile(fileName, str, function (err) {
      if (err) return console.log(err)
      console.log('File ' + name + ' saved!')
    })
  }
}
