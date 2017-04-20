const spide = require('rssspider');
const writeFile = require('./util.js')['writeFile']

module.exports = function getNews (name, url) {
  console.log('Fetching from: ' + url)
  return spide.fetchRss(url).then(function(data) {
    // save to files
    const fileName = name + '.json'
    writeFile(fileName, data)
    return data
  }).catch(err => {
    console.log(err)
    return err
  })
}
