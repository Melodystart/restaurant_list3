//引入mongoose
const mongoose = require('mongoose')
//引入Restaurant model
const Restaurant = require('../restaurant')
//引入json檔案
const restaurantList = require('../../restaurant.json').results

//如果是非正式環境，引入dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//運用mongoose跟mongodb連線
mongoose.connect(process.env.MONGODB_URI)

//取得資料連線狀態
const db = mongoose.connection
//連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
  console.log('running restaurantSeeder script...')
  Restaurant.create(restaurantList)
  console.log('done')

})