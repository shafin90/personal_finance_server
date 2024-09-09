const userValidation = (password, confirmPassword, email) => {

    if (password !== confirmPassword) {
        return {
            success: false,
            message: "Password mismatch"
        }
    }
    else if (password.length < 6) {
        return {
            success: false,
            message: "Password must be atleast 6 character"
        }
    }
    else if (!email.include("@")) {
        return {
            success: false,
            message: "Email format is incorrect"
        }
    }
}

module.exports = { userValidation }