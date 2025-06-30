import React, {useState} from 'react';
import List from "./components/List";
import "./styles/app.css"
import Login from "./components/Login";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [countUsers, setCountUsers] = useState(2);
    const [loginId, setLoginId] = useState(null);
    const [mail, setMail] = useState(null);
    const [users, setUsers] = useState([
        {id: 1, email: "123", password: "123123"}
    ]);
    const [list, setList] = useState([
        {user_id: 1, id : 1, text: "Встать",completed: false},
        {user_id: 1, id : 2, text : "Умыться",completed: false},
        {user_id: 1, id: 3, text: "Спать", completed: false},
        {user_id: 1,id: 4, text: "Есть", completed: false},
    ]);

    return(
    <div>
            {isAuth ?
                <List list={list} setList={setList} mail={mail} setIsAuth={setIsAuth} loginId={loginId} setLoginId={setLoginId} users={users}/>
                :
                <Login setMail={setMail} countUsers={countUsers} setLoginId={setLoginId} setCountUsers={setCountUsers} users={users} setIsAuth={setIsAuth} setUsers={setUsers}/>
            }
    </div>

    );
};

export default App;