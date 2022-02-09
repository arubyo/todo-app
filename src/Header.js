import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header `
  font-size: 3.5em;
  text-align: center;
  transform: var(--transform);
  color: var(--color, palevioletred);
`;

const Header = () => {
    return (
        <StyledHeader className="App-header">
      
        ToDo
       
      
     </StyledHeader>
    );
 };
  
 export default Header;