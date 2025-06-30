import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const NewPost = (props) => {
    return (
        <div className="newPost">
            <MyInput type="text" value={props.value} placeholder="Добавить дело" onChange={e => props.setValue({user_id:props.loginId, id: props.count, text: e.target.value, completed: false})} />
            <MyButton type="button" onClick={props.appendToDoList}>Добавить пункт</MyButton>
        </div>
    );
};

export default NewPost;