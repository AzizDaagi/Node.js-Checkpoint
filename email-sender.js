const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dummymail@gmail.com",
    pass: "PpSiZbZTBc",
  },
});

const mailOptions = {
  from: "dummymail@gmail.com",
  to: "daagi.aziz09403@gmail.com",
  subject: "test",
  text: "Everybody say heeeeeeyyaaaaaannnnn!"
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.error(err)
    }else{
        console.log("Email sent!" + info.response)
    }
})