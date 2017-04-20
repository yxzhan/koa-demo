const Router = require('koa-router')
const sleep = require('./util.js')['sleep']
const writeFile = require('./util.js')['writeFile']
const getNews = require('./crawler.js')

const router = new Router()

router.get('/', showRoot);
router.post('/crawlnews', crawlnews)

function showRoot(ctx) {
  ctx.body = 'Guten Tag!'
}

async function crawlnews (ctx, next) {
  writeFile('request.json', ctx)
  const newsList = await getNews('bbc', 'http://feeds.bbci.co.uk/news/rss.xml')
  ctx.body = newsList
}

module.exports = router