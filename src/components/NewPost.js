import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const NewPost = (props) => {
    return (
        <div className="newPost">
            <MyInput type="text" value={props.text} placeholder="Добавить дело" onChange={e => props.setValue({text: e.target.value, completed: false,user_id:props.loginId})} />
            <MyButton type="button" onClick={props.appendToDoList}>Добавить пункт</MyButton>
        </div>
    );
};

export default NewPost;