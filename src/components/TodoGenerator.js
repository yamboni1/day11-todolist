import {useState} from 'react';
import '../App.css';

const TodoGenerator = (props) => {
    const [todoItem, setTodoItem] = useState("");
    const submitInput = () =>{
        const inputItem = todoItem;
        if(!todoItem.match(/[a-z]/i)) {
            alert("Invalid input! please add text");
            setTodoItem("");
        }else{
            setTodoItem(inputItem);
            props.onInputChange(inputItem)
            setTodoItem("");
        }
        
    }
    return (
        <div className="todoGenerator">
            <input placeholder='type to add new task' type= 'text' value={todoItem}
              onChange={event => setTodoItem(event.target.value)} />
            <button onClick={submitInput}>add</button>  
        
            
        </div>
    )
}
export default TodoGenerator;
