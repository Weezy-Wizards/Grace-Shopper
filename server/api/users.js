const router = require('express').Router()
const {User, Orders, orderItems} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({
      where: {
        id
      }
    })
    if (user) {
      res.json(user)
    }
  } catch (err) {
    next(err)
  }
})

// router.get('/:id/orders', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//       include: [{model: Orders}]
//     })
//     if (!user) {
//       res.status(404).send('Orders not found')
//     }
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })
