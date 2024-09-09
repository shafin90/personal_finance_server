const cost = {
    addCost: (req, res) => {
        try {
            const { cost } = req.body;
        } catch (error) {
            res.json({
                success: false,
                message: "Failed to add",
                error
            })
        }
    }
}

module.exports = { cost }