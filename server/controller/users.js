import User from '../model/User.js'
import bcrypt from "bcrypt";

const PostSignup = async (req, res) => {

    try {
        const { name, email, phone, address, password, repassword } = req.body;

        if (!name || !email || !phone || !address || !password || !repassword) {
            const missingterm = [];
            if (!name) missingterm.push("Name")
            if (!email) missingterm.push("Email")
            if (!phone) missingterm.push("Phone")
            if (!address) missingterm.push("address")
            if (!password) missingterm.push("Password")
            if (!repassword) missingterm.push("RePassword")

            return res.status(400).json({
                success: false,
                message: `Please enter the following fields:${missingterm.join(",")}`
            })
        }

        const salt =bcrypt.genSaltSync(10);

        const newData = new User({
            name: name,
            email: email,
            phone: phone,
            address: address,
            password: bcrypt.hashSync(password,salt)
        })

        const saved = await newData.save();

        res.status(201).json({
            success: true,
            data: saved,
            message: "User's data added.. "
        })
    }
    catch (error) {
        return res.status(400).json({
            success:false,
            message:error?.message
        })
    }
}

export {
    PostSignup
}