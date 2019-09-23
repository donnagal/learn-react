import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Button from './elements/Button'

const theme = {
  primary: 'teal',
  secondary: 'green',
  alert: '#FFC107',
  font: 'serif',
};



const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

function App() {
  return (

      <ThemeProvider theme={theme}>
      <div className="mx-auto text-center">
        <H1>Heading demo </H1>
        <Button color="alert"> Button </Button>
      </div>
      </ThemeProvider>
 
  );
}

export default App;
