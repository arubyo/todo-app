import React from 'react';
import './App.css';
 
const ToDoItem = ({todoitem, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


   return (
       <div id={todoitem.id} key={todoitem.id + todoitem.task} name="todoitem" value={todoitem.id} onClick={handleClick} className={todoitem.complete ? "todoitem strike" : "todo" }>
           {todoitem.task}
       </div>
   );
};



 
export default ToDoItem;