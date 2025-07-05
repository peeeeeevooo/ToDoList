import React, {useState} from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";
import EditItem from "./EditItem";

const Item = (props) => {
    const [edit, setEdit] = useState(false);

    const toggleCompleted = async () => {
        try {
            const response = await fetch('api/post', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: props.item.id, text: props.item.text, completed: !props.item.completed}),
            })

            if (!response.ok) {
                throw new Error('Ошибка при обновлении');
            }



            if (props.sort === "all") {
                const updatedList = props.list.map((el) =>
                    el.id === props.item.id
                        ? { ...el, completed: !props.item.completed }
                        : el
                );
                props.setList(updatedList);
            } else {
                const filteredList = props.list.filter(el =>
                    !(el.id === props.item.id)
                );
                props.setList(filteredList);
            }


        }catch(err) {
            console.error(err);
        }
    }


    return (
        <div className="Element" key={props.item.id}>
            {edit ? <EditItem setTrigger={props.setTrigger} trigger={props.trigger} loginId={props.loginId} item={props.item} setEdit={setEdit} list={props.list} setList={props.setList} />
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