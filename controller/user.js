const { User } = require("../model/user");
const bcrypt = require('bcrypt');
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
                email
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

        } catch (error) {
            res.json({
                success: false,
                message: "Login failed"
            })
        }
    }
}

module.exports = { user }