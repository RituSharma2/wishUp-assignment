const planModel = require("../model/planModel");

const createPlan = async function (req, res) {
  let data = req.body;
  let saved = await planModel.create(data);
  res.send({ status: true, details: saved });
};

module.exports.createPlan = createPlan;
