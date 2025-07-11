import React from 'react';
import Item from "./Item";

const Items = (props) => {

    return (
        <div className="List">
        {props.list.map((item,id) => (
            <Item sort={props.sort} trigger={props.trigger} setTrigger={props.setTrigger} loginId={props.loginId} key={item.id} list={props.list} setList={props.setList} item={item} id={id} deleteItem={props.deleteItem}/>
        ))}
        </div>
    );
};

export default Items;