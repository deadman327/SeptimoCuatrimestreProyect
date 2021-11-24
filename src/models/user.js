const mongoose  = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


const UserSchema = new Schema ({
    name: String,
    email: { type: String, required: true},
    password: { type: String, required: true},
    address: { type: Schema.Types.ObjectId, ref: 'Address'}
})

UserSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.mathPassword = function(passsword) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("User", UserSchema)