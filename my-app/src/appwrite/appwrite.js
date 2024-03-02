import { Client , Databases , Account, ID} from "appwrite";

const client = new Client()
client.setEndpoint(process.env.REACT_APP_APPWRITE_PROJECT_ID);
client.setProject(process.env.REACT_APP_APPWRITE_END_POINT);

const account = new Account(client);
const databases = new Databases(client);
const CreateUser = ({email , pass})=>{
    if(email !== "" && pass !== ""){

     const a=   account.create(ID.unique(), email, pass);
     a.catch((e)=>{
        return e.message;
     })
     a.then((res)=>{
        return res;
     })
    }
}
const login = (email,pass)=>{
    account.createEmailSession(email,pass)
    .then((res)=>{
        return res;
    })
    .catch((er)=>{
        console.log(er.message);
        return false;
    })
}
const logoutf = ()=>{
 account.deleteSession("current"); 
}
export {CreateUser,databases,logoutf, login};
