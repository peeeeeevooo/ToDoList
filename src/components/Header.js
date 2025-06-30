import React, {useState} from 'react';
import SortSelected from "./SortSelected";


const Header = (props) => {
    return (
        <div className="header">
            <SortSelected setSort={props.setSort}/>
            <h1>ToDoList</h1>
            <div className="headerRight">
            <div className="mail">{props.mail}</div>
            <button type="button" className="exit" onClick={() => {
                props.setIsAuth(false)
                props.setLoginId(null)
            }}>Выйти</button>
            </div>

        </div>
    );
};

export default Header;