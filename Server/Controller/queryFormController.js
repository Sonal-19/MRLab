const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendQueryForm = expressAsyncHandler(async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    dropdownOption,
    instituteIndustryName,
    designation,
    department,
    urn,
    testingFacilities,
    samples,
  } = req.body;

  let message = `
    Name: ${name}\n
    Email: ${email}\n
    Contact Number: ${contactNumber}\n
    Institute/Industry: ${dropdownOption}\n
    Name of Institute/Industry: ${instituteIndustryName}\n
    Designation: ${designation}\n
    Department: ${department}\n
    URN: ${urn}\n
    Testing Facilities:\n`;

//   Object.entries(testingFacilities).forEach(([key, value]) => {
//     message += `- ${key}: ${value} samples\n`;
//   });

    Object.entries(testingFacilities).forEach(([key, value]) => {
        const numberOfSamples = samples[key] || 0; // Get the number of samples for this facility
        message += `- ${key}: ${numberOfSamples} samples\n`;
    });

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL, 
    subject: "Query Form Submission",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to send email" });
    } else {
      console.log("Query form submitted successfully!");
      res.status(200).send({ message: "Query form submitted successfully" });
    }
  });
});

module.exports = { sendQueryForm };
