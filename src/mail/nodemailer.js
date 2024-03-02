const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // For handling CORS (Cross-Origin Resource Sharing)

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { to,  text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rawofficial078@gmail.com',
      pass: 'jmmz lagz dccc iqep ',
    },
  });

  const mailOptions = {
    from: 'rawofficial078@gmail.com',
    to:to,
    subject:"Warning ",
    text:text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    console.log("email sent !!");
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
