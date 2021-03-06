const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  totalQuantity: {
    type: Sequelize.INTEGER
  },
  totalPrice: {
    type: Sequelize.FLOAT(4, 2)
  },
  status: {
    type: Sequelize.BOOLEAN,
    default: false
  }
})

module.exports = Orders
