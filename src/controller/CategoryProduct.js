const ModelCategory = require('../models/CategoryProduct');
const MiscHelper = require('../helpers/Helper');
module.exports = {
  getAllCategory: (req, res) => {
    ModelCategory.getAllOrder()
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getCategoryById: (req, res) => {
    const id_order = req.params.id_order
    ModelCategory.getOrderById(id_order)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertCategory: (req, res) => {
    const { user_id, shipping_price, order_price, total_price, address_delivery, city_delivery, province_delivery, phone_delivery, status, finished_order_date } = req.body;
    const data = {
      user_id,
      shipping_price,
      order_price,
      total_price,
      address_delivery,
      city_delivery,
      province_delivery,
      phone_delivery,
      status,
      finished_order_date
    }
    ModelCategory.insertCategory(data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCategory: (req, res) => {
    const { user_id, shipping_price, order_price, total_price, address_delivery, city_delivery, province_delivery, phone_delivery, status, finished_order_date } = req.body;
    const id_order = req.params.id_order
    const data = {
      user_id,
      shipping_price,
      order_price,
      total_price,
      address_delivery,
      city_delivery,
      province_delivery,
      phone_delivery,
      status,
      finished_order_date,
      updated_at: new Date()
    }
    ModelCategory.updateCategory(id_order, data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteCategory: (req, res) => {
    const id_category = req.params.id_category
    ModelCategory.deleteCategory(id_category)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}