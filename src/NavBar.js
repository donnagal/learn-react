import React from 'react'
import styled from '@emotion/styled'
import colors from './color'

const Button = styled.button`
  color: hotpink;
  padding: .5rem 2rem;
`

const Container = styled("header")`
    background: ${colors.dark};
    color: white;
    padding: .5rem 2rem;
    a {
        color: white;
    }
`



function NavBar(){
    return(
        <Container>
           <nav>
                <a href="/item">item</a> |
                <a href="/item">item</a> |
                <a href="/item">item</a> 
            </nav>
            <Button>This is a hotpink button.</Button>
        </Container>
    )
}


export default NavBar