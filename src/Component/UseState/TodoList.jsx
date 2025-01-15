import {useState} from 'react';

const TodoList = () =>
    {
        const [inputItem, setInputItem] = useState("");

        const [todoItems , setTodoItems] = useState([]);

        const SetInput = (e) => 
            {
                setInputItem(e.target.value);
            }

        const HandleSubmit = (e) => 
            {
                e.preventDefault();
                
                inputItem.length > 0 ? setTodoItems([...todoItems,inputItem]) : alert("Enter an item");

                setInputItem("");
            }

        return(
        <section>
            <form onSubmit={HandleSubmit}>
            Item : <input onChange={SetInput} type="text" value={inputItem} ></input>
            <button type="submit" >Add Items</button>
            { 
                todoItems.length > 0
                    ? <ul>{todoItems.map((value,index) => (<li key={index}>{value}</li>))}</ul> 
                    : <></>
            }
            </form>
        </section>);
    }

export default TodoList;