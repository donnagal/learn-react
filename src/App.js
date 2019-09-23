import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const theme = {
  primary: 'teal',
  secondary: 'green',
};

const Button = styled.button`
  font-size: 1.8rem;
  padding: 0.5rem 1.5rem;
  /* background: ${(props) => (props.primary ? 'red' : 'green')}; */
  background: ${(props) => props.theme.primary};
  color: white;
    &:hover {
      opacity: .5;
    }
`;



function App() {
  return (

      <ThemeProvider theme={theme}>
        <h1>Heading demo </h1>
        <Button> Button </Button>
      </ThemeProvider>
 
  );
}

export default App;
