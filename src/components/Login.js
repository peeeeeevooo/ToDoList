import React from 'react';

const Login = (props) => {
    const [log, setLog] = React.useState({email: '', password: ''});
    const [reg, setReg] = React.useState({email: "", password: ""});
    const [error, setError] = React.useState(false);
    const [regError, setRegError] = React.useState(false);

    const login = async () => {

        try{
            const response = await fetch(`api/user/${log.email}/${log.password}`)
            if (!response.ok) {
                throw new Error('Не удалось проверить существующих пользователей');
            }
            const data = await response.json();
            if(data.rows &&  data.rows.length > 0) {
                props.setLoginId(data.rows[0].id);
                props.setMail(log.email);
                props.setIsAuth(true);
                setLog({email: "", password: ""});
            }else{
                setError(true);
                setRegError(false);
                setLog({email: "", password: ""});
            }

        }catch(err){
            setError(true);
            setRegError(false);
            setLog({email: "", password: ""});
            console.error('Login error:', err);
        }

    }

    const register = async () => {

        try {
            const checkResponse = await fetch(`api/user/${reg.email}/${reg.password}`);
            if (!checkResponse.ok) {
                throw new Error('Не удалось проверить существующих пользователей');
            }
            const checkData = await checkResponse.json();
            if(checkData.rows && checkData.rows.length > 0){
                setRegError(true);
                setError(false);
                return;
            }


            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reg),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            props.setMail(reg.email);
            props.setLoginId(data.id);
            setReg({email: "", password: ""});
            props.setIsAuth(true);
            setRegError(false);
        } catch (err) {
            console.error('Registration error:', err);
            setRegError(true);
        }
    }

    return (
        <div className="Lgn">
            <div>
                <h1 style={{textAlign: "center", color: "white"}}>Login</h1>
                <form className="form">
                    <input
                        type="text"
                        className="inpFrm"
                        value={log.email}
                        placeholder="Email"
                        onChange={(e) => setLog({...log, email: e.target.value})}
                    />
                    <input
                        type="password"
                        className="inpFrm"
                        value={log.password}
                        placeholder="Password"
                        onChange={(e) => setLog({...log, password: e.target.value})}
                    />
                    <button type="button" className="btnFrm" onClick={login}>Login</button>
                    {error && (
                        <div style={{color: "red", fontWeight: "bold"}}>НЕВЕРНЫЕ ДАННЫЕ</div>
                    )}
                </form>
            </div>
            <div>
                <h1 style={{textAlign: "center", color: "white"}}>Register</h1>
                <form className="form">
                    <input
                        type="text"
                        className="inpFrm"
                        value={reg.email}
                        placeholder="Email"
                        onChange={(e) => setReg({...reg, email: e.target.value})}
                    />
                    <input
                        type="password"
                        className="inpFrm"
                        value={reg.password}
                        placeholder="Password"
                        onChange={(e) => setReg({...reg, password: e.target.value})}
                    />
                    <button type="button" className="btnFrm" onClick={register}>Register</button>
                    {regError && (
                        <div style={{color: "red", fontWeight: "bold"}}>ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;