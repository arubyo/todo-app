import styled from 'styled-components';
import React, { useState } from 'react';
import { Form, InputGroup, FloatingLabel } from 'react-bootstrap';
import Header from './Header';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';
import data from './data.json';

const Button = styled.button`
  color: papayawhip;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: palevioletred;
  font-weight: bold;
  `;

  const ResetButton = styled(Button)`
    color: palevioletred;
    background: papayawhip;
  
  `;




function App(props) {

  const [toDoList, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header /> 

      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicToDoList">
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" id="new-todo" />
            </FloatingLabel>
            <ResetButton className="btn m-2" variant="outline-secondary" as="input" type="reset" value="Reset" />{' '}
            <Button className="btn">Add</Button>
          </Form.Group>
          

        </Form>
          <ToDoList toDoList={toDoList}/>


      </div>
    </div>
  );
}

export default App;
