const { userIdQuery } = require("../database/dbQueries");
const validateTokenController = async (req, res) => {
  try {
    const user = await userIdQuery(req.user);
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
