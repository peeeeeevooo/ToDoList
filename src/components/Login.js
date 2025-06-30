import React from 'react';

const Login = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [newEmail, setNewEmail] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [error, setError] = React.useState(false);
    const [regError, setRegError] = React.useState(false);

    const login = () => {
        props.users.map((user) => {
                if (user.email === email && user.password === password) {
                    props.setLoginId(user.id);
                    props.setMail(email)
                    setEmail("");
                    setPassword("")
                    props.setIsAuth(true);
                };
            }
        )

        setError(true);
        setRegError(false);
        setEmail("");
        setPassword("")

    }

    const register = () => {
        let fl = false
        props.users.map((user) => {
            if (user.email === newEmail) {
                fl = true
                setNewEmail("")
                setNewPassword("")
            }
        })
        if(!fl) {
            props.setUsers([...props.users, {id: props.countUsers, email: newEmail, password: newPassword}]);
            props.setMail(newEmail)
            props.setLoginId(props.countUsers);
            props.setCountUsers(props.countUsers + 1);
            setNewEmail("");
            setNewPassword("")
            props.setIsAuth(true);
        }else{
            setRegError(true);
            setError(false)
        }
    }


    return (
        <div className="Lgn">
        <div>
            <h1 style={{textAlign: "center", color: "white"}}>Login</h1>
        <form className="form">
            <input type="text" className="inpFrm" value={email} placeholder="Name" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="inpFrm" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="btnFrm" onClick={login}>Login</button>
            {error ?
            <div style={{color: "red", fontSize: "bold"}}>НЕ ВЕРНЫЕ ДАННЫЕ</div>
                : null
            }

        </form>
        </div>
        <div>
            <h1 style={{textAlign: "center", color: "white"}}>Register</h1>
            <form className="form">
                <input type="text" className="inpFrm" value={newEmail} placeholder="Name" onChange={(e) => setNewEmail(e.target.value)} />
                <input type="password" className="inpFrm" value={newPassword} placeholder="Password" onChange={(e) => setNewPassword(e.target.value)} />
                    <button type="button" className="btnFrm" onClick={register}>Register</button>
                {regError ?
                    <div style={{color: "red", fontSize: "bold"}}>ТАКОЕ ИМЯ УЖЕ ЕСТЬ</div>
                    : null
                }
            </form>
        </div>
        </div>
    );
};

export default Login;