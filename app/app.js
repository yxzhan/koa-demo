const logger = require('koa-logger')
const router = require('./router')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
