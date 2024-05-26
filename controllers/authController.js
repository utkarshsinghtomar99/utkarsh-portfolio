const Admin = require("../models/adminModel");
const adminLogin = async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (adminData === null) {
      res.status(401).json({
        msg: "Invalid Username or Password",
      });
    }

    res.status(200).json({
      data: adminData,
      msg: "Login Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminLogin,
};
