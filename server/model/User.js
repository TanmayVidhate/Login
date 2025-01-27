import { model, Schema } from "mongoose";

const stru = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const User = model("User", stru);

export default User;