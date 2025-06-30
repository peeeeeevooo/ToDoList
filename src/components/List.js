import React, { useEffect, useState} from 'react';
import Items from "./Items";
import NewPost from "./NewPost";
import Header from "./Header";
import item from "./Item";

const List = ({list,setList, setIsAuth, users, loginId ,setLoginId, mail}) => {


    const [sortList, setSortList] = useState([
    ])
    const [count, setCount] = useState(5);
    const [sort, setSort] = useState("all");

    useEffect(() => {
        if(sort === "all"){
            setSortList(list.filter(item => item.user_id === loginId))
        }
        if (sort === "completed"){
            setSortList(list.filter(item => item.completed && item.user_id === loginId))
        }
        if (sort === "not-completed"){
            setSortList(list.filter(item => !item.completed && item.user_id === loginId))
        }
    },[list,sort])


    const [value, setValue] = useState({
        user_id: null,
        id: null,
        text: "",
        completed: false
    });

    const appendToDoList = () => {
        setList([...list, value])
        setValue({user_id: null, id:null , text:"", completed: false})
        setCount(count+1)
    }

    const deleteItem = (index) => {
        setList(list.filter(el => el.id !== index))
    }

    return (
        <div>
            <Header mail={mail} setSort={setSort} setIsAuth={setIsAuth} users={users} setLoginId={setLoginId} loginId={loginId}/>
            <Items loginId={loginId} list={list} sortList={sortList} deleteItem={deleteItem} setList={setList} sort={sort}/>
            <NewPost loginId={loginId} count = {count} value={value.text} setValue={setValue} appendToDoList={appendToDoList}/>
        </div>
    );
};

export default List;