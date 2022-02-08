import './App.css';
import styledComponents from 'styled-components';
import { Form, FormLabel, Button, InputGroup, FloatingLabel } from 'react-bootstrap';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      
         ToDo
        
       
      </header>

      <div className="container">
        <Form>
          <FloatingLabel>
            Something that needs to be done?
          </FloatingLabel>

        </Form>

      </div>
    </div>
  );
}

export default App;
