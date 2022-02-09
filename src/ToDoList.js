import React from 'react';
import ToDoItem from './ToDoItem';


const ToDoList = ({ToDoList}) => {
    return (
        <div>

            {ToDoList.map (todoitem => {
                return (
                    <ToDoItem todoitem={todoitem} />
                )
            })}
        </div>
    )
}

export default ToDoList; 
