const Router = require('koa-router')
const parse = require('co-body')
const router = new Router()

router.get('/', showRoot);
router.post('/crawlnews', crawlnews)

function showRoot(ctx) {
  ctx.body = 'Guten Tag!'
}

async function crawlnews (ctx, next) {
  ctx.body = 'get something new'
  setTimeout(() => {conosle.log('hehhe')})
  await next()
}

module.exports = router