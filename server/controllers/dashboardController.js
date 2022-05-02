const pool = require("../database/db");
const validateTokenController = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      req.user,
    ]);
    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: user.rows[0],
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
};

module.exports = validateTokenController;
