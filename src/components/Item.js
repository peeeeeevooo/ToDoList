import React, {useState} from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";
import EditItem from "./EditItem";

const Item = (props) => {
    const [edit, setEdit] = useState(false);

    const toggleCompleted = () => {
        const updatedList = props.list.map(item =>
            item.id === props.item.id
                ? {...item, completed: !item.completed}
                : item
        );
        props.setList(updatedList);
        console.log(updatedList);
    }


    return (
        <div className="Element" key={props.item.id}>
            {edit ? <EditItem loginId={props.loginId} item={props.item} setEdit={setEdit} list={props.list} setList={props.setList} />
             :
                <span>{props.id+1}. {props.item.text}</span>
            }
            <IoCloseCircleSharp onClick={() => props.deleteItem(props.item.id)} className="icon"/>
            <IoHammerSharp onClick={() => {setEdit(!edit)}} className="icon"/>
                <input type="checkbox" className="check" checked={props.item.completed} onChange={toggleCompleted}/>
        </div>
    );
};

export default Item;