import { Client, Databases, Account, ID, Functions } from "appwrite";

const client = new Client();
client.setEndpoint(process.env.REACT_APP_APPWRITE_PROJECT_ID);
client.setProject(process.env.REACT_APP_APPWRITE_END_POINT);

const account = new Account(client);
const databases = new Databases(client);
const func = new Functions(client);

const CreateUser = ({ email, pass }) => {
  if (email !== "" && pass !== "") {
    const a = account.create(ID.unique(), email, pass);
    a.catch((e) => {
      return e.message;
    });
    a.then((res) => {
      return res;
    });
  }
};
const login = (email, pass, cb) => {
  account
    .createEmailSession(email, pass)
     .then(()=>{
      cb("success");
     })
    .catch((er) => {
      cb(er.message);
      return false;
    });
};
const logoutf = () => {
  account.deleteSession("current").then((e)=>{
    alert("Logged out successfully");
    window.location.reload();
  }).catch((e)=>{
    alert( e.message);
  })
};
export { CreateUser, databases, logoutf, func, login };
