const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema ({
    email: String,
    password: String,
    sub: String,
    name: String,
    contact_id: String,
    origin: String,
    role: String,
    access_group: String
})

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

module.exports = model('User', userSchema);