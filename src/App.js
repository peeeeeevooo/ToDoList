import React, {useState} from 'react';
import List from "./components/List";
import "./styles/app.css"
import Login from "./components/Login";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [loginId, setLoginId] = useState(null);
    const [mail, setMail] = useState(null);

    return(
    <div>
            {isAuth ?
                <List mail={mail} setIsAuth={setIsAuth} loginId={loginId} setLoginId={setLoginId}/>
                :
                <Login setMail={setMail} setLoginId={setLoginId} setIsAuth={setIsAuth}/>
            }
    </div>

    );
};

export default App;