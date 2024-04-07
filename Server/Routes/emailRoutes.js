const express = require("express");
const router = express.Router();

const { sendEmail } = require("../Controller/emailController");
const {sendQueryForm} = require("../Controller/queryFormController");

router.post("/sendEmail", sendEmail);
router.post("/sendQueryForm", sendQueryForm);

module.exports = router;
