const connection = require('../configs/db');

module.exports = {
  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM products", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProductById: (id_product) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM products WHERE id = ?", id_product, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProduct: (page, search, sort) => {
    return new Promise((resolve, reject) => {
      if(page){
        if (search){
          connection.query("SELECT * FROM products WHERE product_name LIKE ? ORDER BY created_at desc LIMIT" + (page * 20 - 20) + ", 20", search, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        }else{
          connection.query("SELECT * FROM products ORDER BY created_at desc LIMIT" + (page * 20 - 20) + ", 20", (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        }
      }
    })
  },
  insertProduct: (data)=>{
    return new Promise((resolve, reject)=>{
      connection.query('INSERT INTO products SET ?', data, (err, result)=>{
        if(!err){
          resolve(result)
        }else{
          reject(err)
        }
      })
    })
  },
  updateProduct: (id_product, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE products SET ? WHERE id = ?', [data, id_product], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteProduct: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}