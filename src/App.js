
import React, { useState } from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import data from './data.json';



function App(props) {

  const [toDoList, setToDoList] = useState(data);
  const [ userInput, setUserInput ] = useState('');

  const handleToggle = (id) => {
    let mappedItem = toDoList.map(task => {
      return task.id === id ? {...task, complete: !task.complete } : {...task};
      });
        setToDoList(mappedItem);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  addTask(userInput);
  setUserInput("");

}

const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  setToDoList(copy);
}

  return (
    <div className="App">
      <Header /> 

      <div className="container">
        {/* <Form onsubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicToDoList">
              <Form.Control value={userInput} type="text" onChange={handleChange} placeholder="Leave a comment here" id="new-todo" />

            <ResetButton className="btn m-2" variant="outline-secondary" as="input" type="reset" value="Reset" />{' '}
            <Button type="submit" className="btn">Add</Button>
          </Form.Group>
          

        </Form> */}

        <AddToDo addTask={addTask}/>

        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
               

      </div>
    </div>
  );
}

export default App;
