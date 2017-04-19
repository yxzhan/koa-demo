const route = require('koa-route')
const logger = require('koa-logger')
const Koa = require('koa')
const app = new Koa()

app.use(logger())
app.use(route.get('/', showRoot))
app.use(route.get('/crawlnews', crawlnews))

function showRoot(ctx) {
  this.body = 'Hallo bremen'
}

function crawlnews (ctx) {
  console.log(paramneters)
  this.body = 'get something new'
}

app.listen(3000)