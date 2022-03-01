const planModel = require("../model/planModel");
const subModel = require("../model/subModel"); // import models
const userModel = require("../model/userModel");

const createSubscription = async function (req, res) {
  try {
    let checkUser = await userModel.findOne({ userName: req.body.userName }); // existing user or not
    if (!checkUser) {
      return res
        .status(404)
        .send({ status: false, msg: "please register youself first" });
    }
    let checkPlan = await planModel.findOne({ planId: req.body.planId }); // vaild plan or not
    if (!checkPlan) {
      return res.status(404).send({ status: "FALIURE", msg: "not valid" });
    }
    let createSub = await subModel.create(req.body); // create subscription details
    res.status(200).send({ status: "SUCCESS", amount: -checkPlan.amount });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

//===================================================================================================

const getDetails = async function (req, res) {
  try {
    // if date present in params
    if (req.params.date) {
      let checkSub = await subModel.findOne({ userName: req.params.userName });
      if (!checkSub) {
        res.status(400).send({ status: false, msg: "not any subscription" });
      }
      let details = checkSub.start_date - checkSub.Validity;
      res
        .status(200)
        .send({ status: true, planId: checkSub.planId, daysLeft: details });
    }
    let validateTill = checkSub.start_date + checkSub.validity; // if date not present
    res.status(200).send({
      planId: checkSub.planId,
      start_date: checkSub.start_date,
      vaild_till: validateTill,
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.createSubscription = createSubscription;
module.exports.getDetails = getDetails;
