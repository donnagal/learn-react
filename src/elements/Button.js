import styled, { css } from 'styled-components'


export default styled.button`
  font-family: ${(props) => props.theme.font};
  padding: 0.5rem 1.5rem;

  ${(props) => props.color &&  css `
    background: ${ props => props.theme[props.color]}
  `}

    &:hover {
      opacity: .5;
    }
`;