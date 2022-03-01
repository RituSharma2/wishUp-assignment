const express = require("express");
const router = express.Router();

const planContoller = require("../controller/planContoller");
const userContoller = require("../controller/userController"); // import contollers
const subscription = require("../controller/subscription");

//create users
router.put("/user", userContoller.createUser);

//get user details
router.get("/getUser/:userName", userContoller.getUser);

//create plans
router.post("/createPlan", planContoller.createPlan);

//create subscription
router.post("/subscription", subscription.createSubscription);

//get subscription details
router.get("/getDetails/:userName/:"), subscription.getDetails;

module.exports = router;
