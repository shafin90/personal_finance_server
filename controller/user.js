const { User } = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { uid } = require("uid")
require('dotenv').config();
const { userValidation } = require("../utilityFundtions/userValidation");

const user = {
    register: async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            // validate user
            const { success, message } = userValidation(password, confirmPassword, email);
            if (!success) {
                return res.json({
                    message
                })
            }

            // encrypt password
            const encryptedPassword = bcrypt.hashSync(password, 10)

            // register user
            const registering = new User({
                name,
                password: encryptedPassword,
                email,
                id: uid(25)
            })
            const registrationConfirmed = await registering.save();

            if (!registrationConfirmed) {
                return res.json({
                    success: false,
                    message: "Registration failed"
                })
            }

            res.json({
                success: true,
                message: "Registration successfull"
            })

        } catch (error) {
            res.json({
                success: false,
                error,
                messsage: "Failed to add user"
            })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email })

            if (!user) {
                return res.json({
                    success: false,
                    message: "User not found"
                })
            }

            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign(
                        { id: user.id },
                        process.env.jwt_token,
                        { expiresIn: '3d' }
                    )
                    res.json({
                        success: true,
                        message: "Login successfull",
                        token
                    })
                } else {
                    res.json({
                        success: false,
                        message: "Wrong password"
                    })
                }
            })

        } catch (error) {
            res.json({
                success: false,
                message: "Login failed"
            })
        }
    }
}

module.exports = { user }