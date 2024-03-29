// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引入 home 模組程式碼
const home = require('./modules/home')
// 引入 restaurants 模組程式碼
const restaurants = require('./modules/restaurants')
const users = require('./modules/users') // add this
const auth = require('./modules/auth')   // 引用模組
const { authenticator } = require('../middleware/auth')  // 掛載 middleware

// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組 
router.use('/restaurants', authenticator, restaurants) // 加入驗證程序
router.use('/users', users)  // add this
router.use('/auth', auth)  // 掛載模組
router.use('/', authenticator, home) // 加入驗證程序
// 匯出路由器
module.exports = router