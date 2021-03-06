const connection = require('../configs/db');

module.exports = {
  register: (data) =>{
    return new Promise((resolve, reject)=>{
      connection.query("INSERT INTO users SET ?", data, (err, result) => {
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  },
  getUserPhoneNumber:(phone_number) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users WHERE phone_number =  ?", phone_number, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserByToken: (token) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users WHERE token =  ?", token, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  editUserById:(id_user, data)=>{
    return new Promise((resolve, reject)=>{
      connection.query('UPDATE users SET ? WHERE id_user = ?',[data, id_user], (err, result)=>{
        if(!err) {
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  }
}