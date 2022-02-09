import styled from 'styled-components';
import { Form, InputGroup } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const StyledHeader = styled.header `
  font-size: 3.5em;
  text-align: center;
  transform: var(--transform);
  color: var(--color, palevioletred);
`;

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
  return (
    <div className="App">
      <StyledHeader className="App-header">
      
         ToDo
        
       
      </StyledHeader>

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

      </div>
    </div>
  );
}

export default App;
