import React, {useEffect, useState} from 'react';
import List from "./components/List";
import "./styles/app.css"
import Login from "./components/Login";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [loginId, setLoginId] = useState(null);
    const [mail, setMail] = useState(null);

    useEffect(() => {
       const connectSession = async () => {
           try {
               const session = await fetch('api/session');
               if (!session.ok) {
                   throw new Error('Не удалось создать сессию');
               }
               const data = await session.json();
               if (data.rows && data.rows.length > 0) {
                   setLoginId(data.rows[0].user_id);
                   setMail(data.rows[0].email);
                   setIsAuth(true);
               } else {
                   setLoginId(null);
                   setMail(null);
                   setIsAuth(false);
               }
           }catch(err) {
               console.log(err);
           }
       }
       connectSession();
    },[])

    return(
    <div>
            {isAuth ?
                <List  mail={mail} setIsAuth={setIsAuth} loginId={loginId} setLoginId={setLoginId}/>
                :
                <Login setMail={setMail} setLoginId={setLoginId} setIsAuth={setIsAuth}/>
            }
    </div>

    );
};

export default App;