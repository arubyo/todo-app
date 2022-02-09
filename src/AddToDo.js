import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: papayawhip;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: palevioletred;
  font-weight: bold;
  `;


const AddToDo = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <Button>Submit</Button>
        </form>
    );
};

export default AddToDo;