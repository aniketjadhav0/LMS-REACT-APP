import { func } from "../appwrite/appwrite";

const sendMail = (to, text) => {
  console.log(to , text);
  func
    .createExecution(
      process.env.REACT_APP_MAIL_FUN_ID,
      JSON.stringify({ TO: to, TEXT: text }),
      false,
      "/send-email",
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
export default sendMail 
