// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Restaurant model
const Restaurant = require('../../models/restaurant')

// 設定路由：首頁
router.get('/', (req, res) => {
  Restaurant.find()
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(restaurants => res.render('index', { restaurants: restaurants }))
    .catch(error => console.log(error))
})

// 設定路由：搜尋餐廳關鍵字 or 餐廳類別
router.get('/search', (req, res) => {
  let keyword = req.query.keyword

  //若沒輸入內容時，將頁面導回根目錄，顯示出所有餐廳
  if (!keyword) {
    return res.redirect("/")
  }

  Restaurant.find({})
    .lean()
    .then(restaurants => {
      const filterData =
        restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword))

      res.render('index', { restaurants: filterData, keyword: keyword })

    })

})

// 匯出路由模組
module.exports = router