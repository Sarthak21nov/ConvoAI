import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
})
const User =  mongoose.model('User', UserSchema);
export default User