import React, {useState} from 'react';
import {IoIosAdd} from "react-icons/io";
import {IoCloseCircleSharp} from "react-icons/io5";

const EditItem = (props) => {

    const [newItem, setNewItem] = useState({user_id:props.loginId, id: null, text: '',completed: false});

    let list =  props.list;

    const editItem = () => {
        let ind = props.list.indexOf(props.item);
        let arr = [...list];
        arr[ind] = newItem
        props.setList(arr);
        setNewItem({user_id:null,id: null, text: '',completed: false});
        props.setEdit(false);
    }

    return (
        <span>
                <input className='edit' value={newItem.text} onChange={(e) => {setNewItem({user_id: props.loginId,id:props.item.id, text: e.target.value, completed: props.item.completed})}} />
                <IoIosAdd onClick={editItem}/>
                <IoCloseCircleSharp onClick={() => {
                    props.setEdit(false)
                    setNewItem({user_id:null, id: null, text: '', completed: false});
                }}/>
        </span>
    );
};

export default EditItem;