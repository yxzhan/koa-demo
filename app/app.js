const logger = require('koa-logger')
const router = require('./router')
const Koa = require('koa')

const app = new Koa()

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
