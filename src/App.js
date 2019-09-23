import React from 'react';
import styled from 'styled-components'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const Button = styled.button`
  font-size: 1.8rem;
  padding: 0.5rem 1.5rem;
  background: ${(props) => (props.primary ? 'red' : 'green')};
  color: white;
    &:hover {
      opacity: .5;
    }
`;



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Button> Button </Button>
      <Button primary> primary Button </Button>
      <Footer />

    </div>
  );
}

export default App;
