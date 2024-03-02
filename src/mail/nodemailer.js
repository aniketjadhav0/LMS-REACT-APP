import { func } from "../appwrite/appwrite";

 

// app.post("/send-email", (req, res) => {
//   const { to, text } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "rawofficial078@gmail.com",
//       pass: "jmmz lagz dccc iqep ",
//     },
//   });

//   const mailOptions = {
//     from: "rawofficial078@gmail.com",
//     to: to,
//     subject: "Warning ",
//     text: text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     console.log("email sent !!");
//     res.status(200).send("Email sent: " + info.response);
//   });
// });

const sendMail = (to, text) => {
  func
    .createExecution(
      process.env.REACT_APP_MAIL_FUN_ID,
      JSON.stringify({ TO: to, TEXT: text }),
      false,
      "/",
      "POST",
      { "X-Custom-Header": "123" }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export { sendMail };
