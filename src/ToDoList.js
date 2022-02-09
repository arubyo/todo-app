import React from 'react';
import ToDoItem from './ToDoItem';


const ToDoList = ({toDoList}) => {
    return (
        <div>

            {toDoList.map (todoitem => {
                return (
                    <ToDoItem todoitem={todoitem} />
                )
            })}
        </div>
    )
}

export default ToDoList; 
