const spide = require('rssspider');
const jsonfile = require('jsonfile')
const dir = 'news/'

module.exports = function getNews (name, url) {
  console.log('Fetching from: ' + url)
  return spide.fetchRss(url).then(function(data) {
    // save to files
    const obj = { list: data }
    const fileName = dir + name + '.json'
    
    jsonfile.writeFile(fileName, obj, function (err) {
      if (err) return console.error(err)
      console.log('Write file done!')
    })
    return data
  }).catch(err => {
    console.log(err)
    return err
  })
}
