import React from 'react';
import {Button} from 'react-bootstrap';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';

const ResetButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color: palevioletred;
  background: papayawhip;
  font-weight: bold;
 
  `;



const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>

            {toDoList.map (todoitem => {
                return (
                   
                    <ToDoItem todoitem={todoitem} handleToggle={handleToggle} handleFilter={handleFilter}/>

                )
            })}

            <ResetButton onClick={handleFilter}>Clear Completed</ResetButton>

        </div>

    )
}

export default ToDoList; 
