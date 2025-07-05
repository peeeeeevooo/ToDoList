import React, {useEffect, useState} from 'react';
import Items from "./Items";
import NewPost from "./NewPost";
import Header from "./Header";

const List = ({setIsAuth, loginId ,setLoginId, mail}) => {

    const [trigger,setTrigger] = useState(0);
    const [list, setList] = useState([])
    const [sort, setSort] = useState("all");
    const [value, setValue] = useState({
        text: "",
        completed: false,
        user_id: null
    });

    useEffect(() => {
        const list_sorted = async () => {
            try {
                let url = `api/post/${loginId}`;
                if (sort === "completed") url = `api/post/true/${loginId}`;
                if (sort === "not-completed") url = `api/post/false/${loginId}`;
                const response = await fetch(url);
                const data = await response.json();
                setList(data.rows);
            } catch(err) {
                console.log(err);
            }
        }
        list_sorted();
    }, [sort,loginId, trigger]);

    const appendToDoList = async () => {
        try{
            const response = await fetch('api/post',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(value)
            })
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Site failed');
            }
            setValue({text:"", completed: false,user_id: null})
            setTrigger(trigger+1)
        }catch(err){
            console.error(err)
        }
    }

    const deleteItem = async (id) => {
        try{
            const response = await fetch(`api/post/${id}`,{
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Не удалось удалить запись');
            }
            setTrigger(trigger+1)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Header mail={mail} setSort={setSort} setIsAuth={setIsAuth} setLoginId={setLoginId}/>
            <Items trigger={trigger} setTrigger={setTrigger} loginId={loginId} list={list}  deleteItem={deleteItem} setList={setList} sort={sort}/>
            <NewPost loginId={loginId} text={value.text} setValue={setValue} appendToDoList={appendToDoList}/>
        </div>
    );
};

export default List;