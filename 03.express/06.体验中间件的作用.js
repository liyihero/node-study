const express = require('express')
const app = express()

app.use((req, res, next) => {
  // 获取请求到达服务器的时间
  const time = Date.now()
  // 为 req对象,挂载自定义属性,从而把时间共享给后面的所有路由
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('home page' + req.startTime)
})

app.get('/user', (req, res) => {
  res.send('user page' + req.startTime)
})

app.listen(8081, () => {
  console.log('server listening on http://localhost:8081')
})
