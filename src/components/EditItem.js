import React, {useState} from 'react';
import {IoIosAdd} from "react-icons/io";
import {IoCloseCircleSharp} from "react-icons/io5";

const EditItem = (props) => {

    const [newItem, setNewItem] = useState({id: null, text: '',completed: false});

    const editItem = async () => {
        try {
            const response = await fetch('api/post', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                throw new Error('Ошибка при обновлении');
            }
            props.setList(prev => prev.map(p => p.id === newItem.id ? { ...p, text: newItem.text } : p));
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <span>
                <input className='edit' value={newItem.text} onChange={(e) => {setNewItem({id: props.item.id, text: e.target.value, completed: props.item.completed})}} />
                <IoIosAdd onClick={() => {
                    editItem()
                    props.setEdit(false);
                }}/>
                <IoCloseCircleSharp onClick={() => {
                    props.setEdit(false)
                    setNewItem({id:null, text: '', completed: false,});
                }}/>
        </span>
    );
};

export default EditItem;