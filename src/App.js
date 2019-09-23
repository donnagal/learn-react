import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const theme = {
  primary: 'teal',
  secondary: 'green',
  font: 'serif',
};

const Button = styled.button`
  font-family: ${(props) => props.theme.font};
  padding: 0.5rem 1.5rem;
  /* background: ${(props) => (props.primary ? 'red' : 'green')}; */
  background: ${(props) => props.theme.primary};
  color: white;
    &:hover {
      opacity: .5;
    }
`;

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

function App() {
  return (

      <ThemeProvider theme={theme}>
      <div className="mx-auto text-center">
        <H1>Heading demo </H1>
        <Button> Button </Button>
      </div>
      </ThemeProvider>
 
  );
}

export default App;
