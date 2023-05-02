const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes') // 引用路由器
require('./config/mongoose')

//引用handlebars-helpers
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();

const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs.engine({ helpers: multihelpers, defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)

//啟動伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})