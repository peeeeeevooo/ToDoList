import React, {useState} from 'react';
import Item from "./Item";

const Items = (props) => {

    return (
        <div className="List">`
        {props.sortList.map((item,id) => (
            <Item loginId={props.loginId} key={item.id} list={props.list} setList={props.setList} item={item} id={id} deleteItem={props.deleteItem}/>
        ))}
        </div>
    );
};

export default Items;