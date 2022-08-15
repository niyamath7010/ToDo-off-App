import TodoList from './TodoList';
import './App.css';
import { useState } from 'react';
import Footer from './footer';

function App() {
  // 1.
  const [inputValue,setInputValue]=useState("")  
  //  2.
  const [items,setItems]=useState([])  

  function itemsEvent(event){
    setInputValue(event.target.value)
  }  //1.

  function itemsList(){
    setItems((oldItems)=>{
      return [...oldItems,inputValue]
    })
    setInputValue("")
  }

  return (
    <>
      <div className='main_conatiner'>
        <div className='text'>
          <h2>To Do List</h2>
        </div>
        <div className='header'>
        {/* //1. */}
        <div className='main_content'>
          <input className='inputtype' type="text" placeholder='Enter Itmes' value={inputValue} onChange={itemsEvent}></input>  
          {/* //2. */}
          <button className='main_btn' style={{margin:"8px"}} onClick={itemsList}>➕</button>   
        </div>
          </div>
          <ol>
            {
              items.map((itemval,index)=>{
                return <TodoList key={index} text={itemval} />
              })
            }
          </ol>

        
      </div>
      <Footer />
    </>
  );
}

export default App;
