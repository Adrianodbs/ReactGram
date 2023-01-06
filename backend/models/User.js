const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String
  },
  {
    //para criar 2 campos no model (Created_at, Updated_at)
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
