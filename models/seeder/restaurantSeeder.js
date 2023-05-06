const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
//引入Restaurant model
const Restaurant = require('../restaurant')
//引入json檔案
const restaurantList = require('../../restaurant.json').results
const User = require('../user')

const db = require('../../config/mongoose')

const SEED_USER = [{
  email: 'user1@example.com',
  password: '12345678',
  restaurantNumber: [0, 1, 2]
},
{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678',
  restaurantNumber: [3, 4, 5]
}]

//連線成功
db.once('open', () => {
  return Promise.all(Array.from(
    { length: 2 },
    (_, i) =>
      bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(SEED_USER[i].password, salt))
        .then(hash => User.create({
          name: SEED_USER[i].name,
          email: SEED_USER[i].email,
          password: hash,
        }))
        .then(user => {
          const userId = user._id
          return Promise.all(Array.from(
            { length: 3 },
            (_, j) =>
              Restaurant.create({ ...restaurantList[SEED_USER[i].restaurantNumber[j]], userId })
          ))
        })
  ))
    .then(() => {
      console.log('done.')
      process.exit()
    })
})