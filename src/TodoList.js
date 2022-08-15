import { useState } from "react"
import './App.css';

function TodoList(props){
    const [line,setline]=useState(false)

    function cutIt(){
        setline(true)
    }

    return(
        <>
            <div className="todo">
                <li className="li_style" style={{textDecoration : line ? "line-through":"none" }}>
                    {props.text}
                </li>
                <button  className="delete" onClick={cutIt}>❌</button>
            </div>
        </>
    )
}

export default TodoList;