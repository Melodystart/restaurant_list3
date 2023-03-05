//引入Restaurant model
const Restaurant = require('../restaurant')
//引入json檔案
const restaurantList = require('../../restaurant.json').results

const db = require('../../config/mongoose')
//連線成功
db.once('open', () => {
  console.log('running restaurantSeeder script...')
  Restaurant.create(restaurantList)
  console.log('done')
})