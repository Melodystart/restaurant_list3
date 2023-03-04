// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Restaurant model
const Restaurant = require('../../models/restaurant')


// 設定路由：連至表單增加新餐廳
router.get('/new', (req, res) => {
  res.render('new')
})

//設定路由：接住表單新增餐廳資料，並且把資料送往資料庫
router.post('/', (req, res) => {
  Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 設定路由：瀏覽特定餐廳Detail
router.get('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

// 設定路由：連至表單修改餐廳資料
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

//設定路由：接住表單修改餐廳資料，並且把資料送往資料庫
router.put('/:id', (req, res) => {
  const id = req.params.id //id 從網址上用 req.params.id 取出
  Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//設定路由：刪除餐廳資料
router.delete('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router