const userModel = require("../model/userModel"); // import model

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let saved = await userModel.create(data); // create new user
    res.status(200).send({ msg: "created sucessfully", status: saved });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

//===============================================================================================

const getUser = async function (req, res) {
  try {
    let checkName = await userModel
      .findOne({ userName: req.params.userName }) // check user present in db or not
      .select({ userName: 1, createdAt: 1, _id: 0 });
    if (!checkName) {
      res.status(404).send({ status: false, msg: "please register yourself" });
    }
    res.status(200).send({ status: true, details: checkName });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.createUser = createUser;
module.exports.getUser = getUser;
